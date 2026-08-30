import React, { useState } from 'react';
import { X, Github, Copy, Check, ExternalLink, Globe, FileCode, Terminal } from 'lucide-react';

interface GitHubExportGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubExportGuideModal: React.FC<GitHubExportGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepId);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  const gitCommands = `# 1. Initialize Git repository
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial release: English For Kids website"

# 4. Set main branch
git branch -M main

# 5. Connect to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/english-for-kids.git

# 6. Push code to GitHub
git push -u origin main`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-gray-900 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1b1c15] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-fredoka text-white flex items-center gap-2">
                GitHub Pages එකට Public කරන්නේ මෙහෙමයි
              </h2>
              <p className="text-xs text-gray-300">
                How to publish your "English For Kids" website publicly on GitHub
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-gray-800">
          {/* Sinhala Instruction Notice */}
          <div className="bg-[#f9e534]/20 border border-[#f9e534] rounded-2xl p-4 space-y-1.5">
            <h3 className="text-sm font-bold text-[#706500] font-fredoka flex items-center gap-1.5">
              <span>ඔබගේ ඉල්ලීම පරිදි සකස් කරන ලද සම්පූර්ණ මගපෙන්වීම:</span>
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              ඔබට මෙම වෙබ් අඩවිය GitHub එකට දමා නොමිලේ ලොව ඕනෑම කෙනෙකුට නැරඹිය හැකි වන පරිදි <strong>GitHub Pages</strong> හරහා Public කරගත හැක. පහත පියවර 3 අනුගමනය කරන්න.
            </p>
          </div>

          {/* Step 1: Create Repo */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0061a4] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h4 className="text-sm font-bold text-gray-900">
                GitHub එකේ New Repository එකක් සාදන්න (Create Repository)
              </h4>
            </div>
            <div className="ml-8 text-xs text-gray-600 space-y-1">
              <p>1. GitHub ගිණුමට ලොග් වී <strong>New Repository</strong> ක්ලික් කරන්න.</p>
              <p>2. Repository name එක ලෙස <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#0061a4] font-mono">english-for-kids</code> වැනි නමක් දෙන්න.</p>
              <p>3. <strong>Public</strong> ලෙස තෝරා <strong>Create repository</strong> ඔබන්න.</p>
            </div>
          </div>

          {/* Step 2: Upload or Git Push */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0061a4] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h4 className="text-sm font-bold text-gray-900">
                කෝඩ් එක GitHub එකට Push කරන්න (හෝ Upload කරන්න)
              </h4>
            </div>
            <div className="ml-8 space-y-2">
              <p className="text-xs text-gray-600">
                Terminal එකේ පහත Commands එකින් එක Run කරන්න (ඔබගේ GitHub username එක replace කරන්න):
              </p>
              <div className="relative bg-gray-900 text-gray-100 rounded-xl p-3 font-mono text-xs overflow-x-auto">
                <pre>{gitCommands}</pre>
                <button
                  onClick={() => copyToClipboard(gitCommands, 'git-cmds')}
                  className="absolute top-2 right-2 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-gray-200 text-xs flex items-center gap-1 transition"
                >
                  {copiedStep === 'git-cmds' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Turn on GitHub Pages */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0061a4] text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h4 className="text-sm font-bold text-gray-900">
                GitHub Pages සක්‍රිය කර Public Link එක ලබා ගැනීම
              </h4>
            </div>
            <div className="ml-8 text-xs text-gray-600 space-y-1">
              <p>1. ඔබගේ GitHub repo එකේ <strong>Settings</strong> ටැබ් එකට යන්න.</p>
              <p>2. වම් පැත්තේ ඇති <strong>Pages</strong> මෙනුව ක්ලික් කරන්න.</p>
              <p>3. <strong>Branch</strong> යටතේ <code className="bg-gray-100 px-1 rounded font-mono">main</code> සහ <code className="bg-gray-100 px-1 rounded font-mono">/(root)</code> තෝරා <strong>Save</strong> ඔබන්න.</p>
              <p className="font-semibold text-green-700 pt-1">
                ✓ මිනිත්තු 1-2 කින් ඔබගේ වෙබ් අඩවිය <span className="font-mono underline">https://&lt;username&gt;.github.io/english-for-kids/</span> හරහා සජීවීව දැකගත හැක!
              </p>
            </div>
          </div>

          {/* Standalone index.html info */}
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <span className="font-bold text-gray-700">Standalone index.html:</span> Project එකේ <code className="font-mono bg-gray-100 px-1 rounded">index.html</code> සහ <code className="font-mono bg-gray-100 px-1 rounded">standalone-github-pages.html</code> සූදානම් කර ඇත.
            </div>
            <button
              onClick={onClose}
              className="tactile-btn py-2 px-6 rounded-xl bg-[#0061a4] text-white font-fredoka font-bold text-sm"
            >
              තේරුණා (Got it)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
