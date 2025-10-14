import { Clock, User, FileText } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="bg-white border border-[#0198a7] border-opacity-20 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-[#0b1430] mb-1">
            Your Case Dashboard
          </h3>
          <p className="text-sm text-[#0b1430]/60">
            Track your bill review progress
          </p>
        </div>
        <div className="px-3 py-1 bg-[#0198a7] bg-opacity-10 rounded-full">
          <span className="text-xs font-medium text-[#0198a7]">Active</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-[#f6f8fa] rounded-lg">
          <div className="w-10 h-10 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-[#0198a7]" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#0b1430]">Case ID</p>
            <p className="text-xs text-[#0b1430]/60">SC-2024-{Math.floor(Math.random() * 9000) + 1000}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#f6f8fa] rounded-lg">
          <div className="w-10 h-10 bg-[#253f94] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-[#253f94]" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#0b1430]">Assigned Manager</p>
            <p className="text-xs text-[#0b1430]/60">Sarah Thompson</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#f6f8fa] rounded-lg">
          <div className="w-10 h-10 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-[#0198a7]" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#0b1430]">Estimated Response</p>
            <p className="text-xs text-[#0b1430]/60">Within 48 hours</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#0198a7] border-opacity-10">
        <div className="flex items-center gap-2 text-sm text-[#0b1430]/70">
          <div className="w-2 h-2 bg-[#0198a7] rounded-full animate-pulse" />
          <span>Our team is reviewing your documents</span>
        </div>
      </div>
    </div>
  );
}
