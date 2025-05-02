
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/hooks/useTheme';

const BackToTop = () => {
  const { showButton, scrollToTop } = useScrollToTop();
  const { isDarkMode } = useTheme();
  
  return (
    <>
      {showButton && (
        <Button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-lg p-0 ${
            isDarkMode ? 'bg-thrift-orange hover:bg-thrift-orange/90 text-white' : 'bg-thrift-green hover:bg-thrift-green/90 text-white'
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
