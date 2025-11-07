import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 2000);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const wordCloud = [
    { text: 'Отопление', size: 52, weight: 900 },
    { text: 'Дороги', size: 36, weight: 700 },
    { text: 'Благоустройство', size: 30, weight: 600 },
    { text: 'Водоснабжение', size: 26, weight: 600 },
    { text: 'Освещение', size: 32, weight: 700 },
    { text: 'Транспорт', size: 28, weight: 600 },
    { text: 'Здравоохранение', size: 24, weight: 500 },
    { text: 'Образование', size: 26, weight: 600 },
    { text: 'ЖКХ', size: 38, weight: 700 },
    { text: 'Экология', size: 24, weight: 500 },
  ];

  const tasks = [
    {
      title: 'Контроль подачи тепла в жилой фонд',
      deadline: 'До 18:00',
      aiTip: '💡 Свяжитесь с начальником теплосетей в 14:00 - оптимальное время для оперативного решения',
      priority: 'high',
    },
    {
      title: 'Согласование проекта благоустройства парка',
      deadline: 'До 16:00',
      aiTip: '💡 Рекомендую начать с отдела архитектуры, затем экологическая экспертиза',
      priority: 'medium',
    },
    {
      title: 'Встреча с представителями НКО',
      deadline: '15:30',
      aiTip: '💡 Подготовлены материалы по 3 активным проектам, акцент на волонтёрское движение',
      priority: 'medium',
    },
  ];

  const comments = [
    '🔥 Сергей П.: Спасибо за оперативное решение вопроса с отоплением на ул. Профессиональной!',
    '💬 Анна М.: Когда отремонтируют дорогу на ул. Пушкина? Ямы становятся всё глубже...',
    '📱 Группа ВК "Дмитров": Новая детская площадка в микрорайоне Внуково радует жителей!',
    '⭐ Ольга К.: Отличная работа по уборке снега в этом сезоне. Молодцы!',
    '📢 Telegram-канал: Запущен опрос по благоустройству центральной площади города',
    '🏫 Родители школы №3: Рады, что началась реконструкция! Ждём с нетерпением',
  ];

  const programs = [
    {
      event: 'Ремонт дорожного покрытия',
      effect: '+15% качество покрытия',
      cost: '12.5 млн ₽',
      program: 'Безопасные дороги 2024',
      icon: 'Car',
    },
    {
      event: 'Модернизация теплосетей',
      effect: '-20% потери тепла',
      cost: '8.3 млн ₽',
      program: 'Энергоэффективность ЖКХ',
      icon: 'Flame',
    },
    {
      event: 'Детские площадки',
      effect: '+5 новых объектов',
      cost: '3.2 млн ₽',
      program: 'Комфортная среда',
      icon: 'Trees',
    },
    {
      event: 'Волонтёрское движение',
      effect: '+200 участников',
      cost: '1.1 млн ₽',
      program: 'Поддержка НКО',
      icon: 'Heart',
    },
  ];

  const mapInteractions = [
    { label: 'Камера района', icon: 'Video', color: 'red' },
    { label: 'Подключить НКО', icon: 'Users', color: 'yellow' },
    { label: 'Сформировать решение', icon: 'FileCheck', color: 'blue' },
    { label: 'Карта объектов', icon: 'MapPin', color: 'green' },
    { label: 'Статистика района', icon: 'BarChart3', color: 'purple' },
  ];

  const mapPoints = [
    { name: 'Дмитров центр', x: 50, y: 45, icon: '🏛️', type: 'admin' },
    { name: 'Школа №3', x: 65, y: 55, icon: '🏫', type: 'education' },
    { name: 'Парк', x: 35, y: 60, icon: '🌳', type: 'nature' },
    { name: 'Поликлиника', x: 45, y: 30, icon: '🏥', type: 'health' },
    { name: 'ТЦ', x: 60, y: 40, icon: '🛒', type: 'commercial' },
  ];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-red-50 via-yellow-50 to-white">
      <div className="max-w-[1800px] mx-auto space-y-4">
        <header className="glass rounded-3xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/files/d2a47e15-1034-4d6f-9164-35ef20ee16ad.png"
                alt="Герб Дмитрова"
                className="h-20 w-auto object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-1">ИИ ПАНЕЛЬ инвестиционного развития 
</h1>
                <p className="text-sm text-gray-600">Дмитровский муниципальный округ</p>
              </div>
            </div>

            <div className="glass-red rounded-2xl p-3 flex items-center gap-3">
              <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                ЗГ
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">Иван Петров</p>
                <p className="text-xs text-gray-600">Заместитель Главы Администрации</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 p-3 rounded-xl overflow-hidden relative border-2 border-black/10">
            <div
              className="flex gap-8 whitespace-nowrap"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'transform 0.05s linear',
              }}
            >
              {[...comments, ...comments].map((comment, idx) => (
                <span key={idx} className="text-white font-semibold text-sm">
                  {comment}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="glass rounded-3xl p-6 shadow-lg border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">Облако мер поддержки ОКВЭД</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 p-8 bg-gradient-to-br from-red-50/50 to-yellow-50/50 rounded-2xl min-h-[280px] border-2 border-black/5">
              {wordCloud.map((word, index) => (
                <span
                  key={index}
                  className="cursor-pointer transition-all hover:scale-110 hover:text-red-700 select-none"
                  style={{
                    fontSize: `${word.size}px`,
                    fontWeight: word.weight,
                    color: word.size > 40 ? '#dc2626' : word.size > 30 ? '#f59e0b' : '#6b7280',
                    textShadow: word.size > 40 ? '2px 2px 4px rgba(0,0,0,0.1)' : 'none',
                  }}
                >
                  {word.text}
                </span>
              ))}
            </div>
          </Card>

          <Card className="glass-yellow rounded-3xl p-6 shadow-lg border-2 border-yellow-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">Поручения главы в сфере МСП</h2>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 border-2 ${
                    task.priority === 'high'
                      ? 'bg-red-50/80 border-red-400'
                      : 'bg-yellow-50/60 border-yellow-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-sm text-gray-900 flex-1">{task.title}</h3>
                    <Badge
                      className={`ml-2 ${
                        task.priority === 'high'
                          ? 'bg-red-500 text-white'
                          : 'bg-yellow-500 text-white'
                      }`}
                    >
                      {task.deadline}
                    </Badge>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2 border border-gray-300">
                    <p className="text-xs text-gray-800">{task.aiTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="glass rounded-3xl p-6 shadow-lg border-2 border-yellow-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"> Госпрограммы для реализации текущих запросов МСП</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((prog, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-yellow-50/40 rounded-2xl p-4 border-2 border-black/10 hover:border-red-400 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <Icon name={prog.icon as any} className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-gray-900">{prog.event}</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Icon name="TrendingUp" size={14} className="text-green-600" />
                    <span className="text-gray-700">{prog.effect}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Wallet" size={14} className="text-yellow-600" />
                    <span className="font-semibold text-gray-900">{prog.cost}</span>
                  </div>
                  <div className="bg-red-100 rounded-lg p-2 border border-red-300 mt-2">
                    <p className="font-semibold text-red-700 text-xs">{prog.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 glass rounded-3xl p-6 shadow-lg border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Map" className="text-red-600" size={28} />
              Интерактивная карта МО
            </h2>
            <div className="relative bg-gradient-to-br from-cyan-100 to-green-100 rounded-2xl overflow-hidden border-2 border-black/10">
              <img
                src="https://cdn.poehali.dev/files/3da2226d-31fa-41d9-baec-500a1c553955.jpg"
                alt="Карта Дмитровского района"
                className="w-full h-auto opacity-90"
              />

              {mapPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="relative">
                    <div className="text-3xl animate-bounce hover:scale-125 transition-transform">
                      {point.icon}
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {point.name}
                    </div>
                    {idx < 3 && (
                      <svg className="absolute top-1/2 left-1/2 w-32 h-32 pointer-events-none -z-10">
                        <line
                          x1="0"
                          y1="0"
                          x2={idx === 0 ? 60 : idx === 1 ? -40 : 30}
                          y2={idx === 0 ? 40 : idx === 1 ? 30 : -20}
                          stroke="#ef4444"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}

              <div className="absolute top-3 left-3 bg-white/90 rounded-xl p-2 border-2 border-black/10">
                <p className="text-xs font-bold text-gray-900">📍 Точки интересов</p>
              </div>
            </div>
          </Card>

          <Card className="glass-yellow rounded-3xl p-6 shadow-lg border-2 border-yellow-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Settings" className="text-yellow-600" size={24} />
              Опции взаимодействия
            </h2>
            <div className="space-y-3">
              {mapInteractions.map((option, index) => (
                <Button
                  key={index}
                  className={`w-full justify-start gap-3 bg-gradient-to-r ${
                    option.color === 'red'
                      ? 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                      : option.color === 'yellow'
                      ? 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                      : option.color === 'blue'
                      ? 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                      : option.color === 'green'
                      ? 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                      : 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                  } text-white font-semibold border-2 border-black/10`}
                >
                  <Icon name={option.icon as any} size={20} />
                  {option.label}
                </Button>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-4 border-2 border-black/10">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Sparkles" className="text-yellow-600" size={20} />
                <h3 className="font-bold text-sm">ИИ-Прогноз</h3>
              </div>
              <p className="text-xs text-gray-700">
                💡 Рекомендуется подключить НКО "Экология" к проекту парковой зоны - это ускорит
                реализацию на 15%
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;