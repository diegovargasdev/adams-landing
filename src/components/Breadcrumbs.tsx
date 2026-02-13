import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-[#977DA4]">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {item.href ? (
                        <Link
                            to={item.href}
                            className="hover:text-[#3A3364] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-[#3A3364] font-medium">
                            {item.label}
                        </span>
                    )}

                    {index < items.length - 1 && (
                        <ChevronRight className="w-4 h-4 opacity-60" />
                    )}
                </div>
            ))}
        </nav>
    );
}
