/**
 * Contact Controller
 * Handles contact form submission, inquiry handling, and status retrieval.
 */

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message, company } = req.body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Name is required.',
      });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Valid email address is required.',
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Message body cannot be empty.',
      });
    }

    const ticketId = `TICK-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const contactEntry = {
      id: ticketId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'General Inquiry',
      company: company ? company.trim() : null,
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been received. Our team will contact you shortly.',
      data: contactEntry,
    });
  } catch (error) {
    return next(error);
  }
};

export const getContactConfig = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: {
        departmentOptions: ['Sales', 'Technical Support', 'Billing', 'Partnerships'],
        officeHours: 'Mon-Fri 9:00 AM - 6:00 PM EST',
        responseSLA: '24 hours',
      },
    });
  } catch (error) {
    return next(error);
  }
};
