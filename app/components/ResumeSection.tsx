'use client';

import React, { useState } from 'react';
import { Download, FileText, Upload, X } from 'lucide-react';

export default function ResumeSection() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [resumeURL, setResumeURL] = useState<string | null>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setResumeURL(url);
    }
  }

  function clearUpload() {
    if (resumeURL) {
      URL.revokeObjectURL(resumeURL);
    }
    setUploadedFile(null);
    setResumeURL(null);
  }

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Upload size={20} className="text-primary-600 dark:text-primary-400" />
          Upload Your Resume
        </h3>
        
        <div className="space-y-4">
          <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center hover:border-primary-400 dark:hover:border-primary-500 transition-colors bg-slate-50 dark:bg-slate-900/50">
            <input
              type="file"
              accept=".pdf,.txt,.md,.doc,.docx"
              onChange={onFileChange}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="cursor-pointer text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Click to upload resume
            </label>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Supported formats: PDF, TXT, MD, DOC, DOCX
            </p>
          </div>

          {uploadedFile && (
            <div className="flex items-center justify-between bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{uploadedFile.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {resumeURL && (
                  <a
                    href={resumeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Preview
                  </a>
                )}
                <button
                  onClick={clearUpload}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg border border-primary-200 dark:border-primary-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Download size={20} className="text-primary-600 dark:text-primary-400" />
          Download Resume Template
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Download a formatted version of my resume for your records.
        </p>
        <button className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <Download size={18} />
          Download Resume (PDF)
        </button>
      </div>

      {/* Contact Info */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact Information</h3>
        <div className="space-y-2 text-slate-700 dark:text-slate-300">
          <p><strong className="text-slate-900 dark:text-white">Name:</strong> Morgan Ambrose Naranjo</p>
          <p><strong className="text-slate-900 dark:text-white">Title:</strong> Corporate Sales Manager</p>
          <p><strong className="text-slate-900 dark:text-white">Email:</strong> your.email@example.com</p>
          <p><strong className="text-slate-900 dark:text-white">Location:</strong> Your Location</p>
        </div>
      </div>
    </div>
  );
}