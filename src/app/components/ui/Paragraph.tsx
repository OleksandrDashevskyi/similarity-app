import React, {FC, forwardRef, HTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";

const paragraphVariants = cva(
    "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text center",
    {
        variants: {
            size: {
                default: "text-base sm:text-lg",
                sm: "tex-sm, sm:text-base",
            },
            defaultVariants: {
                size: "default",
            }
        }
    });

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
}


const Paragraph =
    forwardRef<HTMLParagraphElement, ParagraphProps>
    (({
          className,
          size,
          children,
          ...props
      }) => {
        return <div>Paragraph</div>
    });

Paragraph.displayName = "Paragraph"
export default Paragraph;