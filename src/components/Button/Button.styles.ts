const styles =  {
    blackBtn_redBtn: [
        'text-[22px]', 'tracking-[7.5%]', 'py-[5px]', 'px-[30px]', 'border', 'border-solid', 'w-[100%]'
    ].join(' '),
    blackBtn: [
        'text-[var(--primary)]',  'border-[var(--primary)]', 'bg-inherit',
    ].join(' '),
    flat_btn: [
        'border', 'border-solid', 'sm:max-w-[194px]',  'max-w-full',   'gap-[10px]' , 'flex' , 'items-center', 'justify-between' , 'md:text-[18px]', 'text-[16px]', 'tracking-[7.5%]', 
    ].join(' '),
    navigation_btn: [
        'border', 'border-solid', 'items-center', 'justify-between', 'w-[100%]' , 'md:text-[18px]', 'text-[16px]', 'tracking-[7.5%]', 'uppercase', 'py-[5px]'
    ].join(" "),
    navigation_btn_active: [
        'text-inherit',  'border-[var(--primary)]', 'bg-[var(--primary)]',
    ].join(" ")
}

export default styles;




