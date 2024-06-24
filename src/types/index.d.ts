declare type MagicBUttonProps ={
    title:string,
    otherClasses?:string,
    handleBtn?:()=>void,
    icon: React.ReactNode;
    position:string,
}


declare type BentoGridItemProps={
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
   
  }