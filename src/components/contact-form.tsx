'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Éxito' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
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
      <SubmitButton />
    </form>
  );
}
