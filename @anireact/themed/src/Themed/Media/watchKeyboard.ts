import { toLower } from '@anireact/prelude';

const ignore_ = [
    'text',
    'password',
    'date',
    'datetime-local',
    'month',
    'number',
    'search',
    'tel',
    'time',
    'url',
    'week',
];

export const watchKeyboard = (subscriber: (keyboard: boolean) => unknown, ignore = ignore_) => {
    // TODO: When focus comes to some input field, activate keyboard.

    const keydown = (e: Event) => {
        const target = e.target! as Element;
        const tag = toLower(target.tagName);

        if (tag === 'textarea' || (tag === 'input' && ignore.includes(toLower(target.getAttribute('type')!)))) {
            return;
        }

        subscriber(true);
    };

    const mousedown = () => {
        subscriber(false);
    };

    window.addEventListener('keydown', keydown);
    window.addEventListener('mousedown', mousedown);

    return () => {
        window.removeEventListener('keydown', keydown);
        window.removeEventListener('mousedown', mousedown);
    };
};
