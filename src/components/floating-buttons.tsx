import Link from 'next/link';
import { MessageCircle, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { socialLinks } from '@/lib/data';


export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <Link href="https://wa.me/+584246684134" target="_blank" rel="noopener noreferrer">
        <Button size="icon" className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg">
          <MessageCircle className="h-7 w-7" />
          <span className="sr-only">WhatsApp</span>
        </Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="secondary" className="rounded-full h-14 w-14 shadow-lg">
            <Share2 className="h-7 w-7" />
            <span className="sr-only">Compartir</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="end" className="mb-2">
            {socialLinks.filter(s => s.name !== 'WhatsApp').map((social) => (
                <DropdownMenuItem key={social.name} asChild>
                    <Link href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <social.icon className="h-4 w-4" />
                        <span>{social.name}</span>
                    </Link>
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
