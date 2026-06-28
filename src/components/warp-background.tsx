import { useEffect, useState } from 'react';
import { Warp, type WarpProps } from '@paper-design/shaders-react';

export default function WarpBackground(props: WarpProps) {
    // Respect the user's reduced-motion preference by freezing the animation.
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const query = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReduceMotion(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);

    const defaultProps = {
        speed: 0.4,
        rotation: 0.5,
        style: { width: '100%', height: '100%' }
    };

    const merged = { ...defaultProps, ...props };

    return (
        <Warp
            {...merged}
            speed={reduceMotion ? 0 : merged.speed}
            style={{ ...defaultProps.style, ...props.style }}
        />
    );
}
