import React from 'react';
import { Loader2 } from 'lucide-react';

const Loadingbar: React.FC = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Loader2 
        className="h-34 w-34 animate-spin text-[#f97c2f]" 
        strokeWidth={2}
      />
    </div>
  );
};

export default Loadingbar;