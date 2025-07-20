"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import '@/lib/i18n'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <main className='p-8 space-y-6'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card>
          <CardHeader>
            <h1 className='text-2xl font-bold'>{t('title')}</h1>
          </CardHeader>
          <CardContent>
            <p>{t('welcome')}</p>
            <Image src='/next.svg' alt='Camp' width={400} height={200} />
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}
