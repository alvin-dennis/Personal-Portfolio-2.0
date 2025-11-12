"use client"

import { useState, useEffect } from 'react'
import { Variants } from 'framer-motion'
import moment from 'moment-timezone'
import { MotionP } from '@/components/Framer'

interface TimezoneProps {
    timezone: string
    location: string
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
};

const Timezone = ({ timezone, location }: TimezoneProps) => {
    const [dateTime, setDateTime] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment().tz(timezone)
            setDateTime(now.format('ddd, DD MMMM YYYY h:mm:ss A'))
        }, 1000)

        return () => clearInterval(interval)
    }, [timezone])

    return (
        <div className='mt-3'>
            <MotionP
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                {dateTime}
            </MotionP>
            <MotionP
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm text-gray-500">
                {location}
            </MotionP>
        </div>
    )
}

export default Timezone
