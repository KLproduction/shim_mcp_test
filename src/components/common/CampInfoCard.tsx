import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export function CampInfoCard() {
  return (
    <Card>
      <CardHeader>Why Join Us?</CardHeader>
      <CardContent>
        <p>Learn English with experienced teachers.</p>
        <Image src='/next.svg' alt='Camp' width={300} height={150} />
      </CardContent>
    </Card>
  )
}
