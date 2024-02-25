import { toast } from 'sonner';

export const shuffle = array => {
  return array.sort(() => Math.random() - 0.5);
};

export const validateName = name => {
  const nameRegex = /^[A-Za-z0-9_@./#&+\-!]{3,15}$/;
  if (nameRegex.test(name)) return true;
  toast.error(
    'Name must be between 3 and 15 characters long. Check special characters if it keeps getting error.'
  );
};
