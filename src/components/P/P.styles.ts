const styles = {
    big: [
        "sm:text-[26px]",'text-[20px]',  'tracking-[7.5%]', 'uppercase',
    ].join(" "),
    medium: [
        'sm:text-[20px]', 'text-[18px]', 'tracking-[7.5%]',
    ].join(" "),
    small: [
        'sm:text-[18px]', 'text-[16px]', 'tracking-[7.5%]',
    ].join(' '),
    bright: [
        'text-[var(--first-text)]'
    ].join(' '),
    swarthy: [
        'text-[var(--second-text)]'
    ].join(' '),
}

export default styles;