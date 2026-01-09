import { Award, CheckCircle, Users } from 'lucide-react';

const stats = [
    { value: '10+', label: 'Años de experiencia', icon: Award },
    { value: '5k+', label: 'Reparaciones completadas', icon: CheckCircle },
    { value: '98%', label: 'Clientes satisfechos', icon: Users },
];

export default function StatsSection() {
    return (
        <section className="bg-muted">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8">
                    {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-2">
                        <stat.icon className="w-10 h-10 text-primary" />
                        <div>
                        <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
