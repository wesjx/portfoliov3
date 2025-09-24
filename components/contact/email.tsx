import { Html } from '@react-email/components';

export default function EmailBody({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <Html>
      <p>Contact form message from {name} ({email}):</p>
      <p>{message}</p>
    </Html>
  );
}
