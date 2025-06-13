' use client'

interface SectionTitleProps {
    text: string,
    underlineWidthClass?: string //e.g w-24 
}

export default function SectionTitle({ text, underlineWidthClass = "w-24" }: SectionTitleProps) {
  return (
    <main className="mb-8 mt-8">
      <div className="font-semibold flex items-center text-3xl">
        <span className="mr-2">/</span>
        <span>{ text }</span>
        {/* underline that grows remaining space */}
        <span className={`ml-4 ${underlineWidthClass} md:w-24 lg:w-32 h-px bg-gray-600`}></span>
      </div>
    </main>
  )
}
