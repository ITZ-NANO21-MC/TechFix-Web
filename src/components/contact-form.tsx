'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const isEmailJsConfigured = serviceId && templateId && publicKey;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!isEmailJsConfigured) {
      toast({
        title: 'Servicio no configurado',
        description:
          'El servicio de correo no está configurado. Por favor, contacta al administrador.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast({
            title: 'Éxito',
            description: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
            variant: 'default',
          });
          formRef.current?.reset();
        },
        (error) => {
          toast({
            title: 'Error',
            description: `Hubo un problema al enviar tu mensaje: ${error.text}`,
            variant: 'destructive',
          });
          console.error('FAILED...', error.text);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </div>
      <div>
        <Label htmlFor="phone">Teléfono (Opcional)</Label>
        <Input type="tel" id="phone" name="phone" />
      </div>
      <div>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <Button type="submit" disabled={isSubmitting || !isEmailJsConfigured} className="w-full">
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
      {!isEmailJsConfigured && (
        <p className="text-xs text-center text-muted-foreground mt-2">
          El formulario de contacto está deshabilitado.
        </p>
      )}
    </form>
  );
}
