import React, { Fragment, ElementType } from 'react';
import { type MDXComponents } from 'mdx/types';
import * as runtime from 'react/jsx-runtime';
import { Callout } from '@/components/callout';

const useMDXComponents = (code: string): MDXComponents => {
    const fn = new Function(code);
    const components = fn(runtime);
    return {
        ...components as MDXComponents,
        Callout: () => (
            <>
                <Callout type='default'>
                    jdflasfdbaks
                </Callout>
                <Callout type='default'>
                    jdflasfdbaks
                </Callout>
            </>
        ),
    };
}

interface MDXComponentsProps {
    code: string;
}

const MDXComponentsWrapper: React.FC<{ components: MDXComponents }> = ({ components }) => {
    return (
        <Fragment>
            {Object.entries(components).map(([key, Component]) => {
                if (typeof Component === 'function') {
                    return React.createElement(Component as ElementType, { key });
                }
                return null;
            })}
        </Fragment>
    );
}

export default function MDXComponents({ code }: MDXComponentsProps) {
    const components = useMDXComponents(code);
    return <MDXComponentsWrapper components={components} />;
}
