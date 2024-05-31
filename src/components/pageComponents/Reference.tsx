interface ReferenceProps {
    links: {
        live?: string;
        code: {
            label: string;
            url: string;
        }[];
        documentation?: string;
    }
}

export const Reference = (
    { links }: ReferenceProps
) => {
    return (
        <section></section>
    )
}