
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollAnimation';

const BackToTop = () => {
  const { showButton, scrollToTop } = useScrollToTop();
  
  return (
    <>
      {showButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-lg bg-thrift-green hover:bg-thrift-green/90 text-white p-0"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
