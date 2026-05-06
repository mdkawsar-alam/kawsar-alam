// Validation utilities and schemas

export const VALIDATION_RULES = {
  required: (value) => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return 'This field is required';
    }
    return null;
  },
  
  email: (value) => {
    if (!value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  },
  
  url: (value) => {
    if (!value) return null;
    try {
      new URL(value);
      return null;
    } catch {
      return 'Please enter a valid URL';
    }
  },
  
  phone: (value) => {
    if (!value) return null;
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
      return 'Please enter a valid phone number';
    }
    return null;
  },
  
  minLength: (min) => (value) => {
    if (!value) return null;
    if (value.length < min) {
      return `Must be at least ${min} characters long`;
    }
    return null;
  },
  
  maxLength: (max) => (value) => {
    if (!value) return null;
    if (value.length > max) {
      return `Must be no more than ${max} characters long`;
    }
    return null;
  },
  
  min: (min) => (value) => {
    if (!value) return null;
    if (Number(value) < min) {
      return `Must be at least ${min}`;
    }
    return null;
  },
  
  max: (max) => (value) => {
    if (!value) return null;
    if (Number(value) > max) {
      return `Must be no more than ${max}`;
    }
    return null;
  },
  
  arrayMinLength: (min) => (value) => {
    if (!Array.isArray(value)) return null;
    if (value.length < min) {
      return `Must have at least ${min} items`;
    }
    return null;
  },
  
  arrayMaxLength: (max) => (value) => {
    if (!Array.isArray(value)) return null;
    if (value.length > max) {
      return `Must have no more than ${max} items`;
    }
    return null;
  }
};

export const VALIDATION_SCHEMAS = {
  hero: {
    slides: {
      title: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(3), VALIDATION_RULES.maxLength(100)],
      subtitle: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(3), VALIDATION_RULES.maxLength(100)],
      description: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(10), VALIDATION_RULES.maxLength(500)],
      tech: [VALIDATION_RULES.arrayMinLength(1), VALIDATION_RULES.arrayMaxLength(10)]
    }
  },
  
  header: {
    logo: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(50)],
    menuItems: {
      name: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(30)],
      path: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(1), VALIDATION_RULES.maxLength(100)]
    }
  },
  
  about: {
    title: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(3), VALIDATION_RULES.maxLength(100)],
    description: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(20), VALIDATION_RULES.maxLength(1000)],
    name: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(100)],
    position: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(5), VALIDATION_RULES.maxLength(200)],
    bio: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(20), VALIDATION_RULES.maxLength(1000)],
    contact: {
      email: [VALIDATION_RULES.required, VALIDATION_RULES.email],
      phone: [VALIDATION_RULES.required, VALIDATION_RULES.phone],
      github: [VALIDATION_RULES.url],
      linkedin: [VALIDATION_RULES.url]
    },
    summary: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(20), VALIDATION_RULES.maxLength(500)]
  },
  
  services: {
    title: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(3), VALIDATION_RULES.maxLength(100)],
    description: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(10), VALIDATION_RULES.maxLength(500)]
  },
  
  projects: {
    title: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(3), VALIDATION_RULES.maxLength(100)],
    description: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(10), VALIDATION_RULES.maxLength(1000)],
    link: [VALIDATION_RULES.url],
    image: [VALIDATION_RULES.url],
    technologies: [VALIDATION_RULES.arrayMinLength(1), VALIDATION_RULES.arrayMaxLength(15)]
  },
  
  contact: {
    name: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(100)],
    email: [VALIDATION_RULES.required, VALIDATION_RULES.email],
    subject: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(3), VALIDATION_RULES.maxLength(200)],
    message: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(10), VALIDATION_RULES.maxLength(1000)]
  },
  
  contactPage: {
    title: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(100)],
    subtitle: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(10), VALIDATION_RULES.maxLength(500)],
    address: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(5), VALIDATION_RULES.maxLength(200)],
    phone: [VALIDATION_RULES.required, VALIDATION_RULES.phone],
    email: [VALIDATION_RULES.required, VALIDATION_RULES.email],
    website: [VALIDATION_RULES.required, VALIDATION_RULES.url],
    workingHours: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(5), VALIDATION_RULES.maxLength(100)],
    socialLinks: {
      linkedin: [VALIDATION_RULES.url],
      github: [VALIDATION_RULES.url],
      twitter: [VALIDATION_RULES.url],
      instagram: [VALIDATION_RULES.url],
      facebook: [VALIDATION_RULES.url],
      whatsapp: [VALIDATION_RULES.url]
    },
    mapLocation: {
      lat: [VALIDATION_RULES.required, VALIDATION_RULES.min(-90), VALIDATION_RULES.max(90)],
      lng: [VALIDATION_RULES.required, VALIDATION_RULES.min(-180), VALIDATION_RULES.max(180)],
      address: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(5), VALIDATION_RULES.maxLength(200)]
    }
  },
  
  skills: {
    name: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(50)],
    category: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(30)],
    level: [VALIDATION_RULES.required, VALIDATION_RULES.min(1), VALIDATION_RULES.max(100)]
  },
  
  footer: {
    copyright: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(5), VALIDATION_RULES.maxLength(200)],
    description: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(10), VALIDATION_RULES.maxLength(500)],
    socialLinks: {
      github: [VALIDATION_RULES.url],
      linkedin: [VALIDATION_RULES.url],
      twitter: [VALIDATION_RULES.url],
      facebook: [VALIDATION_RULES.url],
      instagram: [VALIDATION_RULES.url]
    },
    quickLinks: {
      name: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(2), VALIDATION_RULES.maxLength(30)],
      path: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(1), VALIDATION_RULES.maxLength(100)]
    },
    contactInfo: {
      email: [VALIDATION_RULES.required, VALIDATION_RULES.email],
      phone: [VALIDATION_RULES.required, VALIDATION_RULES.phone],
      address: [VALIDATION_RULES.required, VALIDATION_RULES.minLength(5), VALIDATION_RULES.maxLength(200)]
    }
  }
};

export function validateField(value, rules) {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return null;
}

export function validateForm(data, schema) {
  const errors = {};
  
  function validateObject(obj, schema, prefix = '') {
    for (const [key, rules] of Object.entries(schema)) {
      const fieldPath = prefix ? `${prefix}.${key}` : key;
      const value = prefix ? obj[prefix.split('.')[0]]?.[key] : obj[key];
      
      if (typeof rules === 'object' && !Array.isArray(rules)) {
        // Nested object validation
        if (value && typeof value === 'object') {
          validateObject(value, rules, fieldPath);
        }
      } else if (Array.isArray(rules)) {
        // Field validation
        const error = validateField(value, rules);
        if (error) {
          errors[fieldPath] = error;
        }
      }
    }
  }
  
  validateObject(data, schema);
  return errors;
}

export function getFieldError(errors, fieldPath) {
  return errors[fieldPath] || null;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}

export function validateImageUpload(file) {
  const errors = [];
  
  if (!file) {
    errors.push('No file selected');
    return errors;
  }
  
  // Check file type
  if (!file.type.startsWith('image/')) {
    errors.push('File must be an image');
  }
  
  // Check file size (5MB max)
  if (file.size > 5 * 1024 * 1024) {
    errors.push('File size must be less than 5MB');
  }
  
  // Check file extension
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
  if (!allowedExtensions.includes(fileExtension)) {
    errors.push('File must be a JPG, PNG, GIF, or WebP image');
  }
  
  return errors;
}

export function validateUrl(url) {
  if (!url) return null;
  
  try {
    new URL(url);
    return null;
  } catch {
    return 'Please enter a valid URL';
  }
}
