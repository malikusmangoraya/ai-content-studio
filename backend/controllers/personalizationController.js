/**
 * Personalization Controller
 * Handles user preference personalization and tailored recommendation logic.
 */

const preferencesMap = new Map();

/**
 * Fetch personalized settings and recommendations for user context.
 */
exports.getPersonalization = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.query.userId || 'default-user';
    const saved = preferencesMap.get(userId) || {
      theme: 'system',
      persona: 'saas_admin',
      locale: 'en-US',
      contentInterests: ['analytics', 'automation'],
      dashboardLayout: 'grid',
      recommendationsEnabled: true,
    };

    const recommendations = saved.recommendationsEnabled
      ? [
          { id: 'rec-1', title: 'Configure API Integrations', type: 'action', priority: 'high' },
          {
            id: 'rec-2',
            title: 'Explore Analytics Dashboard',
            type: 'feature',
            priority: 'medium',
          },
          { id: 'rec-3', title: 'Setup Team Permissions', type: 'guide', priority: 'low' },
        ]
      : [];

    return res.status(200).json({
      success: true,
      data: {
        userId,
        preferences: saved,
        recommendations,
        personalizedAt: new Date().toISOString(),
      },
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Update personalized configuration for user.
 */
exports.updatePersonalization = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.body.userId || 'default-user';
    const existing = preferencesMap.get(userId) || {};

    const updated = {
      ...existing,
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    preferencesMap.set(userId, updated);

    return res.status(200).json({
      success: true,
      message: 'Personalization preferences updated',
      data: updated,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Reset user personalization settings.
 */
exports.resetPersonalization = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.body.userId || 'default-user';
    preferencesMap.delete(userId);

    return res.status(200).json({
      success: true,
      message: 'Personalization settings reset to defaults',
    });
  } catch (err) {
    next(err);
  }
};
