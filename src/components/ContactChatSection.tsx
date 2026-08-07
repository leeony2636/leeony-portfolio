import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, ContactFormData } from '../types';
import { Mail, Send, Sparkles, Copy, Check, Bot, User, MessageSquare, Loader2 } from 'lucide-react';

interface ContactChatSectionProps {
  onOpenResume: () => void;
}

export const ContactChatSection: React.FC<ContactChatSectionProps> = ({ onOpenResume }) => {
  // Contact Form State
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    category: '협업 및 프로젝트 문의',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Chatbot State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: '안녕하세요! 하주성의 공식 AI 분신 챗봇입니다. ⚡\n\n하주성 님의 핵심 강점, 주요 프로젝트 성과, 현장 빌딩 신조, 협업 가능 여부 등 궁금하신 점을 편하게 질문해 보세요!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isChatLoading]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('leeony@naver.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  // Send message to Gemini AI endpoint (/api/chat)
  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim() || isChatLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsChatLoading(true);

    try {
      // Build history payload for context
      const historyPayload = chatMessages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({ sender: m.sender, text: m.text }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: historyPayload,
        }),
      });

      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.text || data.fallbackText || '답변을 생성할 수 없습니다.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChatMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: '네트워크 연결 상태를 확인해주세요. 하주성 님에게 직접 연락을 원하시면 leeony@naver.com 으로 메일을 보내주시기 바랍니다.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const samplePrompts = [
    '하주성 님의 핵심 강점은 무엇인가요?',
    '85% 시간 절감 프로젝트 알려주세요',
    '사용하는 핵심 기술 스택이 무엇인가요?',
    '이력서나 연락처 보는 방법은?',
  ];

  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full blue-glow"></span>
          문의 & AI 챗봇
        </h2>
        <p className="text-xs text-gray-400 ml-4.5 tracking-wider uppercase font-medium">
          Get in Touch & Ask Ha Ju-seong's AI Persona
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 5 Cols: Contact Form & Info */}
        <div className="lg:col-span-5 glass-card p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                협업 제안 및 문의하기
              </h3>
              <button
                onClick={onOpenResume}
                className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-medium"
              >
                📄 이력서 보기
              </button>
            </div>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              AI 서비스 기획, 신규 서비스 구축, 풀스택 MVP 제안 등 어떠한 문의든 환영합니다. 
              확인 후 신속하게 회신드립니다.
            </p>

            {/* Direct Email Card */}
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                  DIRECT EMAIL
                </p>
                <p className="text-sm font-bold text-blue-300 font-mono">leeony@naver.com</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-xl transition flex items-center gap-1 text-xs cursor-pointer"
                title="이메일 주소 복사"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>

            {/* Form */}
            {formSubmitted ? (
              <div className="p-6 bg-blue-950/40 border border-blue-500/30 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto text-blue-400">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-base font-bold text-white">문의가 성공적으로 전달되었습니다!</h4>
                <p className="text-xs text-gray-300">
                  남겨주신 이메일({formData.email})로 하주성 님이 확인 후 곧 답변드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', company: '', category: '협업 및 프로젝트 문의', message: '' });
                  }}
                  className="mt-2 text-xs text-blue-400 hover:underline"
                >
                  새로운 문의 작성
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">성함 / 담당자명 *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="홍길동"
                    className="w-full px-3.5 py-2.5 bg-gray-900 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">회신받을 이메일 *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="example@company.com"
                      className="w-full px-3.5 py-2.5 bg-gray-900 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">소속 / 회사명</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      placeholder="회사명 또는 개인"
                      className="w-full px-3.5 py-2.5 bg-gray-900 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">문의 유형</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full px-3.5 py-2.5 bg-gray-900 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="협업 및 프로젝트 문의">협업 및 프로젝트 문의</option>
                    <option value="채용 / 입사 제안">채용 / 입사 제안</option>
                    <option value="AI 서비스 기획 자문">AI 서비스 기획 자문</option>
                    <option value="기타 문의">기타 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">문의 내용 *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="프로젝트 일정, 주요 요구사항, 전달사항을 편하게 적어주세요."
                    className="w-full px-3.5 py-2.5 bg-gray-900 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition blue-glow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  문의 메시지 전송
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right 7 Cols: Gemini AI Chatbot */}
        <div className="lg:col-span-7 glass-card p-6 flex flex-col justify-between min-h-[550px] relative border-blue-500/30">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center blue-glow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  하주성 AI 분신 챗봇
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
                    Gemini 3.6 Flash
                  </span>
                </h3>
                <p className="text-[11px] text-gray-400">하주성 님의 역량, 경험, 신조에 대해 대화해보세요.</p>
              </div>
            </div>

            <button
              onClick={() =>
                setChatMessages([
                  {
                    id: 'welcome',
                    sender: 'assistant',
                    text: '대화가 초기화되었습니다. 궁금한 사항을 편하게 질문해 주세요! ⚡',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  },
                ])
              }
              className="text-[11px] text-gray-400 hover:text-white underline"
            >
              대화 초기화
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 max-h-[380px] pr-1">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                        : msg.isError
                        ? 'bg-red-950/60 border border-red-500/30 text-red-200 rounded-tl-none'
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <p className="text-[10px] text-gray-500 px-1">{msg.timestamp}</p>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center text-gray-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isChatLoading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-xs text-gray-400 flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
                  하주성 AI 답변 생성 중...
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Sample Suggestion Chips */}
          <div className="py-2 flex flex-wrap gap-1.5 border-t border-white/5">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={isChatLoading}
                className="px-2.5 py-1 bg-white/5 hover:bg-blue-900/30 text-[11px] text-gray-300 hover:text-blue-300 rounded-lg border border-white/5 transition cursor-pointer"
              >
                💬 {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="pt-2 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="하주성 님에게 궁금한 내용을 입력하세요..."
              className="flex-1 px-4 py-2.5 bg-gray-900 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 placeholder:text-gray-500"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isChatLoading}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs font-semibold blue-glow transition flex items-center gap-1 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              전송
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
