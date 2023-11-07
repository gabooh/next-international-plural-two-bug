import { getI18n } from '@/locales/server'

export default async function Home () {
  const t = await getI18n()

  return (
    <div>
      <div>1: {t('count', { count: 0 })}</div>
      <div>2: {t('count', { count: 1 })}</div>
      <div>3: {t('count', { count: 2 })}</div>
      <div>4: {t('count', { count: 3 })}</div>
    </div>
  )
}