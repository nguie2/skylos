import { site } from "@/lib/data";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-secondary-container text-on-secondary-container text-center py-1.5 text-label-sm font-label-md">
      {site.announcement}
    </div>
  );
}
