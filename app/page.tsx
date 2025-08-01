import { MusicProvider } from "@/context/music-context";
import { VipHero } from "@/components/demo/bautizo/vip/VipHero";
import { PremiumInvitation } from "@/components/demo/bautizo/premium/PremiumInvitation";
import { BasicCountdown } from "@/components/demo/bautizo/basic/BasicCountdown";
import { BasicEventDetails } from "@/components/demo/bautizo/basic/BasicEventDetails";
import { VipGuestInfo } from "@/components/demo/bautizo/vip/VipGuestInfo";
import { VipItinerary } from "@/components/demo/bautizo/vip/VipItinerary";
import { VipFamilyRoles } from "@/components/demo/bautizo/vip/VipFamilyRoles";
import { VipPlaylist } from "@/components/demo/bautizo/vip/VipPlaylist";
import { VipGallery } from "@/components/demo/bautizo/vip/VipGallery";
import { PremiumFamily } from "@/components/demo/bautizo/premium/PremiumFamily";
import { BasicAttendance } from "@/components/demo/bautizo/basic/BasicAttendance";
import { BasicGiftOptions } from "@/components/demo/bautizo/basic/BasicGiftOptions";
import { PremiumThankYou } from "@/components/demo/bautizo/premium/PremiumThankYou";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <MusicProvider>
        <VipHero />

        {/* 📋 INVITACIÓN DE BAUTISMO - Heredada del premium */}
        <PremiumInvitation />

        {/* ⏰ CUENTA REGRESIVA AL SACRAMENTO - Heredada del básico */}
        <BasicCountdown />

        {/* 📅 DETALLES DEL BAUTISMO - Heredada del básico */}
        <BasicEventDetails />

        {/* ℹ️ INFORMACIÓN PARA INVITADOS - CARACTERÍSTICA VIP EXCLUSIVA */}
        <VipGuestInfo />

        {/* 📅 ITINERARIO COMPLETO - CARACTERÍSTICA VIP EXCLUSIVA */}
        <VipItinerary />

        {/* 👨‍👩‍👧‍👦 ROLES FAMILIARES - CARACTERÍSTICA VIP EXCLUSIVA */}
        <VipFamilyRoles />

        {/* 🎵 PLAYLIST CELESTIAL - CARACTERÍSTICA VIP ENHANCED */}
        <VipPlaylist />

        {/* 📸 GALERÍA DE MOMENTOS - CARACTERÍSTICA VIP ENHANCED */}
        <VipGallery />

        {/* 👥 FAMILIA ESPECIAL - Heredada del premium */}
        <PremiumFamily />

        {/* ✅ CONFIRMACIÓN DE ASISTENCIA - Heredada del básico */}
        <BasicAttendance />

        {/* 🎁 BENDICIONES PARA SOFIA - Heredada del básico */}
        <BasicGiftOptions />

        {/* 💝 MENSAJE DE GRATITUD - Heredada del premium */}
        <PremiumThankYou />
      </MusicProvider>
    </div>
  );
}
