declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  const content: any;
  const viewBox: string;
  const width: string;
  const height: string;
  export default content;
  export default src;
}
