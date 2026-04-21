import React from 'react';

const ProfileSectionHeader: React.FC = () => {
  return (

    <div className="mb-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">
            Perfil
        </h1>

        <p className="text-muted-foreground md:w-2/3">
            Aqui puedes cambiar los datos de tu cuenta.
        </p>
    </div>
    
  );
};

export default ProfileSectionHeader;