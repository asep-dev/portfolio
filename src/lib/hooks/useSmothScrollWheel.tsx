import { useEffect, RefObject } from 'react';

interface UseSmoothScrollWheelProps {
   element: RefObject<HTMLElement>;
   scrollAmount?: number;
   scrollSpeed?: number;
}
const useSmoothScrollWheel = ({
   element,
   scrollAmount = 2,
   scrollSpeed = 2,
}: UseSmoothScrollWheelProps): void => {
   useEffect(() => {
      let isScrolling = false;
      const sectionElement = element.current;
      if (!sectionElement) return;
      const scrollHandler = (event: WheelEvent) => {
         const delta = event.deltaY;
         isScrolling = true;
         sectionElement.scrollBy({
            top: delta * scrollAmount,
            behavior: 'smooth',
         });
         setTimeout(() => {
            isScrolling = false;
         }, scrollSpeed);
      };
      sectionElement.addEventListener('wheel', scrollHandler);

      return () => {
         sectionElement.removeEventListener('wheel', scrollHandler);
      };
   }, [element]);
};

export default useSmoothScrollWheel;
