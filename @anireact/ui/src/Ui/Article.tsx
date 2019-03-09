import { colors } from '@anireact/css';
import React from 'react';
import { ArticleProps, ui } from './ui';

export interface Article extends ArticleProps {}

export const Article = ui(({ children, ...rest }: Article, { theme }) => {
    const { text, plain } = theme;
    const { bg, fg } = plain;

    return (
        <article role={'document'} {...rest}>
            {children}
            <style jsx>{/* language=CSS */ `
                article {
                    ${text};
                    ${colors(bg, fg)};
                }
            `}</style>
        </article>
    );
}, 'Article');
