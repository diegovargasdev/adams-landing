import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfo() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Teléfono */}
            <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#977DA4] flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                    <p className="font-medium text-[#3A3364]">Teléfono</p>
                    <p className="text-sm text-[#3A3364]/80">
                        +52 (55) 5254-6933
                    </p>
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#7CDB55] flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                    <p className="font-medium text-[#3A3364]">Email</p>
                    <p className="text-sm text-[#3A3364]/80">
                        contacto@armoniafamiliar.com.mx
                    </p>
                </div>
            </div>

            {/* Ubicación */}
            <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#3A3364] flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                    <p className="font-medium text-[#3A3364]">Ubicación</p>
                    <p className="text-sm text-[#3A3364]/80">
                        Miguel Hidalgo, CDMX
                    </p>
                </div>
            </div>

        </div>
    );
}