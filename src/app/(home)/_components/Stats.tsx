import { Variants } from "framer-motion";
import { MotionSection, MotionDiv, MotionP } from "@/components/Framer";
import Section from "@/components/Section";

interface Stat {
    label: string;
    value: string;
}

interface StatsProps {
    stats: Stat[];
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
    },
};

export default function Stats({ stats }: StatsProps) {
    return (
        <Section
            text="Stats"
            href="stats"
            paragraph="Key professional metrics reflecting experience, projects, and expertise."
        >
            <MotionDiv
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {stats.map((stat) => (
                    <MotionDiv
                        key={stat.label}
                        variants={fadeInUp}
                        className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-sm"
                    >
                        <MotionP className="text-2xl font-bold text-primary">
                            {stat.value}
                        </MotionP>
                        <MotionP className="mt-1 text-sm text-muted-foreground text-center">
                            {stat.label}
                        </MotionP>
                    </MotionDiv>
                ))}
            </MotionDiv>
        </Section>
    );
}
