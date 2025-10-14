import { useState, useRef, DragEvent } from 'react';
import { Upload, File, CheckCircle, X } from 'lucide-react';

interface UploadedFile {
  name: string;
  size: number;
  progress: number;
  id: string;
}

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  };

  const processFiles = (newFiles: File[]) => {
    const uploadedFiles = newFiles.map((file) => ({
      name: file.name,
      size: file.size,
      progress: 0,
      id: Math.random().toString(36).substr(2, 9),
    }));

    setFiles((prev) => [...prev, ...uploadedFiles]);

    uploadedFiles.forEach((file) => {
      simulateUpload(file.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
        }, 200);
      }
      setFiles((prev) =>
        prev.map((f) => (f.id === fileId ? { ...f, progress: Math.min(progress, 100) } : f))
      );
    }, 200);
  };

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-all duration-320 ${
          isDragging
            ? 'border-[#0198a7] bg-[#0198a7] bg-opacity-5 scale-105'
            : 'border-[#0198a7] border-opacity-30 hover:border-opacity-50'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
          className="hidden"
          aria-label="File upload input"
        />

        <div className="flex flex-col items-center space-y-4">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-220 ${
              isDragging ? 'bg-[#0198a7] scale-110' : 'bg-[#0198a7] bg-opacity-10'
            }`}
          >
            <Upload
              className={`w-8 h-8 transition-colors duration-220 ${
                isDragging ? 'text-white' : 'text-[#0198a7]'
              }`}
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-lg font-medium text-[#0b1430] mb-2">
              Drop your medical bills here
            </p>
            <p className="text-sm text-[#0b1430]/60 mb-4">
              or click to browse files
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-[#0198a7] text-white rounded-lg font-medium transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0198a7]"
              aria-label="Select files to upload"
            >
              Select files
            </button>
          </div>

          <p className="text-xs text-[#0b1430]/50">
            Supports PDF, DOC, DOCX, JPG, PNG up to 10MB
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="bg-white border border-[#0198a7] border-opacity-20 rounded-lg p-4 animate-slideUp"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {file.progress === 100 ? (
                    <CheckCircle className="w-5 h-5 text-[#0198a7]" aria-hidden="true" />
                  ) : (
                    <File className="w-5 h-5 text-[#0198a7]" aria-hidden="true" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-[#0b1430] truncate">
                      {file.name}
                    </p>
                    <span className="text-xs text-[#0b1430]/60 ml-2">
                      {formatFileSize(file.size)}
                    </span>
                  </div>

                  <div className="relative h-1.5 bg-[#0198a7] bg-opacity-10 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#0198a7] transition-all duration-300 ease-out"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => removeFile(file.id)}
                  className="p-1 hover:bg-[#0198a7] hover:bg-opacity-10 rounded transition-colors duration-150"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="w-4 h-4 text-[#0b1430]/60" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showSuccess && (
        <div className="mt-6 bg-[#0198a7] bg-opacity-10 border border-[#0198a7] rounded-lg p-4 animate-scaleIn">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#0198a7]" aria-hidden="true" />
            <div>
              <p className="font-medium text-[#0b1430]">Upload successful!</p>
              <p className="text-sm text-[#0b1430]/70">
                Your files are securely stored and our team will review them shortly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
