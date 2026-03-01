import { ClipboardClock, Smile, BookCheck, Shovel, Zap } from 'lucide-react'
import { useLanguage } from '../contexts/language-context'

export function FloatingLinks() {
    const { language, t } = useLanguage()

    // Logic for URLs
    const getUrl = (baseUrl: string) => language === 'en'
        ? (baseUrl.endsWith('/') ? `${baseUrl}en` : `${baseUrl}/en`)
        : baseUrl

    const homeUrl = getUrl("https://apex.hoy.today/")
    const emojisUrl = getUrl("https://apex.milemojis.com")
    const scriptingUrl = getUrl("https://apexsearch.vercel.app")
    const antipalaUrl = getUrl("https://apex.antipala.pro")
    const moovimientoUrl = getUrl("https://moovimiento.com")

    return (
        <>
            {/* Left Side Buttons */}
            <div className="fixed bottom-8 left-8 flex gap-3 z-30 transition-opacity duration-300">
                {/* Home Button */}
                <a
                    href={homeUrl}
                    className="hidden sm:block p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
                    aria-label={t('ariaHome')}
                    title={t('ariaHome')}
                >
                    <ClipboardClock className="w-6 h-6 text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
                </a>

                {/* Emojis Button */}
                <a
                    href={emojisUrl}
                    className="hidden sm:block p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
                    aria-label={t('ariaEmojis')}
                    title={t('ariaEmojis')}
                >
                    <Smile className="w-6 h-6 text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
                </a>

                {/* Scripting Button */}
                <a
                    href={scriptingUrl}
                    className="peer p-3 flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
                    aria-label="Ir al Scripting"
                    title="Ir al Scripting"
                >
                    <BookCheck className="w-6 h-6 shrink-0 text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
                    <span className="font-semibold text-sm text-zinc-900 dark:text-white group-hover:text-yellow-500 max-w-0 overflow-hidden opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap transition-all duration-300 ease-in-out">
                        Ir al Scripting
                    </span>
                </a>

                <a
                    href={antipalaUrl}
                    className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg transition-all opacity-50 cursor-not-allowed pointer-events-none group overflow-hidden peer-hover:opacity-0 peer-hover:w-0 peer-hover:p-0 peer-hover:border-0 peer-hover:ml-[-12px]"
                    aria-label={t('ariaPlay')}
                    title={t('ariaPlay')}
                    tabIndex={-1}
                >
                    <Shovel className="w-6 h-6 text-zinc-900 dark:text-white transition-colors" />
                </a>
            </div>

            {/* Right Side Button */}
            <div className="fixed bottom-8 right-8 z-30 transition-opacity duration-300">
                <a
                    href={moovimientoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer flex items-center justify-center"
                    aria-label="Moovimiento"
                    title="Moovimiento"
                >
                    <Zap className="w-6 h-6 text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors fill-none" />
                </a>
            </div>
        </>
    )
}
