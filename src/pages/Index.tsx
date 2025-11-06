import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 1000);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const investProjects = [
    { name: 'Строительство спорткомплекса', progress: 85, emoji: '🏋️', sources: ['Регион 45%', 'Федерация 40%', 'Местный 15%'] },
    { name: 'Реконструкция школы №3', progress: 62, emoji: '🏫', sources: ['Регион 60%', 'Местный 40%'] },
    { name: 'Парковая зона «Зелёный остров»', progress: 40, emoji: '🌳', sources: ['Федерация 70%', 'Местный 30%'] },
    { name: 'Модернизация теплосетей', progress: 95, emoji: '🔥', sources: ['Регион 55%', 'Федерация 45%'] },
  ];

  const fundingSources = [
    { source: 'Региональный бюджет', amount: 52, color: '#ef4444' },
    { source: 'Федеральный бюджет', amount: 32, color: '#fbbf24' },
    { source: 'Местный бюджет', amount: 16, color: '#60a5fa' },
  ];

  const tasks = [
    {
      title: 'Контроль подачи тепла в жилой фонд',
      deadline: 'До 18:00',
      aiTip: 'Свяжитесь с начальником теплосетей в 14:00 - оптимальное время для оперативного решения',
      priority: 'high',
    },
    {
      title: 'Согласование проекта благоустройства парка',
      deadline: 'До 16:00',
      aiTip: 'Рекомендую начать с отдела архитектуры, затем экологическая экспертиза',
      priority: 'medium',
    },
    {
      title: 'Встреча с представителями НКО',
      deadline: '15:30',
      aiTip: 'Подготовлены материалы по 3 активным проектам, акцент на волонтёрское движение',
      priority: 'medium',
    },
  ];

  const comments = [
    '🔥 Сергей П.: Спасибо за оперативное решение вопроса с отоплением!',
    '💬 Анна М.: Когда отремонтируют дорогу на ул. Пушкина?',
    '📱 Группа ВК "Дмитров": Новая детская площадка радует жителей!',
    '⭐ Ольга К.: Отличная работа по уборке снега!',
    '📢 Telegram-канал: Запущен опрос по благоустройству центра',
  ];

  const programs = [
    {
      event: 'Ремонт дорог',
      effect: '+15% качество дорожного покрытия',
      cost: '12.5 млн ₽',
      program: 'Безопасные дороги 2024',
    },
    {
      event: 'Модернизация теплосетей',
      effect: '-20% потери тепла',
      cost: '8.3 млн ₽',
      program: 'Энергоэффективность ЖКХ',
    },
    {
      event: 'Строительство детских площадок',
      effect: '+5 новых объектов',
      cost: '3.2 млн ₽',
      program: 'Комфортная городская среда',
    },
    {
      event: 'Развитие волонтёрского движения',
      effect: '+200 активных участников',
      cost: '1.1 млн ₽',
      program: 'Социальная поддержка НКО',
    },
  ];

  const resources = [
    {
      group: 'Силами Администрации',
      icon: 'Building2',
      color: 'red',
      events: [
        'Организация субботников',
        'Контроль качества дорог',
        'Работа с обращениями граждан',
      ],
    },
    {
      group: 'Силами НКО',
      icon: 'Users',
      color: 'yellow',
      events: [
        'Помощь пожилым людям',
        'Экологические акции',
        'Благотворительные мероприятия',
      ],
    },
    {
      group: 'Силами Региона',
      icon: 'MapPin',
      color: 'blue',
      events: [
        'Строительство инфраструктуры',
        'Финансирование программ',
        'Межмуниципальные проекты',
      ],
    },
  ];

  const aiRecommendations = [
    { area: 'ЖКХ', tip: 'Увеличить финансирование на 15% для предотвращения аварий', icon: 'Home' },
    { area: 'Образование', tip: 'Запустить 2 новых кружка в ДК «Лидер»', icon: 'GraduationCap' },
    { area: 'Дороги', tip: 'Приоритет — ул. Пушкина (макс. обращений)', icon: 'Car' },
  ];

  const biggestChanges = [
    { indicator: 'Обращения граждан', value: '+250', percent: '+35%', trend: 'up' },
    { indicator: 'Выполненных поручений', value: '+180', percent: '+42%', trend: 'up' },
    { indicator: 'Аварийных ситуаций', value: '-120', percent: '-28%', trend: 'down' },
  ];

  const awaitingDocs = [
    { name: 'Распоряжение №9842', status: 'ok', aiNote: 'Документ оформлен корректно' },
    { name: 'Протокол совещания от 05.11', status: 'error', aiNote: 'Отсутствует подпись секретаря' },
    { name: 'Отчёт по ГП «Безопасные дороги»', status: 'ok', aiNote: 'Готов к подписанию' },
    { name: 'Смета на Q1 2025', status: 'warning', aiNote: 'Не указан источник финансирования' },
  ];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-red-50 via-yellow-50 to-white">
      <div className="max-w-[1600px] mx-auto space-y-4">
        <header className="glass rounded-3xl p-4 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.poehali.dev/files/d2a47e15-1034-4d6f-9164-35ef20ee16ad.png"
              alt="Герб Дмитрова"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ИИ ПАНЕЛЬ Дмитровского Муниципального округа</h1>
              <p className="text-sm text-gray-600">Сводные данные по всей Администрации</p>
            </div>
          </div>

          <div className="glass-red rounded-2xl p-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              ЗГ
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">Заместитель Главы</p>
              <p className="text-xs text-gray-600">Администрации</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="glass rounded-3xl p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Icon name="Sparkles" className="text-yellow-600" size={28} />
              ИИ-Рекомендации
            </h2>
            <div className="space-y-3">
              {aiRecommendations.map((rec, index) => (
                <div key={index} className="bg-yellow-50/50 rounded-xl p-3 border-2 border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={rec.icon as any} size={18} className="text-yellow-600" />
                    <h3 className="font-bold text-sm text-gray-900">{rec.area}</h3>
                  </div>
                  <p className="text-xs text-gray-700 flex items-start gap-1">
                    <Icon name="Lightbulb" size={14} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                    {rec.tip}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-red rounded-3xl p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Icon name="TrendingUp" className="text-red-600" size={28} />
              Наибольшие изменения
            </h2>
            <div className="space-y-3">
              {biggestChanges.map((change, index) => (
                <div key={index} className="bg-white/60 rounded-xl p-3 border-2 border-red-400/30">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm text-gray-900">{change.indicator}</h3>
                    <Icon
                      name={change.trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
                      size={18}
                      className={change.trend === 'up' ? 'text-green-600' : 'text-red-600'}
                    />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-red-600">{change.value}</span>
                    <span className="text-sm font-semibold text-gray-600">{change.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass rounded-3xl p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Icon name="FileSignature" className="text-red-500" size={28} />
              Ожидание подписания
            </h2>
            <div className="space-y-2">
              {awaitingDocs.map((doc, index) => (
                <div key={index} className="bg-white/60 rounded-xl p-2 border-l-4"
                  style={{
                    borderLeftColor: doc.status === 'ok' ? '#22c55e' : doc.status === 'error' ? '#ef4444' : '#f59e0b'
                  }}
                >
                  <h3 className="font-semibold text-xs text-gray-900 mb-1">{doc.name}</h3>
                  <div className="flex items-start gap-1">
                    <Icon
                      name={doc.status === 'ok' ? 'CheckCircle' : doc.status === 'error' ? 'XCircle' : 'AlertCircle'}
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        doc.status === 'ok' ? 'text-green-600' : doc.status === 'error' ? 'text-red-600' : 'text-yellow-600'
                      }`}
                    />
                    <p className="text-xs text-gray-700">{doc.aiNote}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="glass rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="TrendingUp" className="text-red-500" size={28} />
              Реализация инвестпроектов
            </h2>
            <div className="space-y-4">
              <div className="space-y-3">
                {investProjects.map((project, index) => (
                  <div key={index} className="bg-white/60 rounded-xl p-3 border-2 border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{project.emoji}</span>
                        <h3 className="font-semibold text-sm text-gray-900">{project.name}</h3>
                      </div>
                      <span className="text-lg font-bold text-red-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.sources.map((source, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-700">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-red-50/50 to-yellow-50/50 rounded-2xl p-4">
                <h3 className="font-bold text-sm mb-3 text-center">Источники финансирования</h3>
                <div className="flex items-center justify-center gap-4 mb-3">
                  {fundingSources.map((fund, index) => {
                    const radius = 45;
                    const circumference = 2 * Math.PI * radius;
                    const offset = circumference - (fund.amount / 100) * circumference;
                    const rotate = index === 0 ? 0 : fundingSources.slice(0, index).reduce((sum, f) => sum + (f.amount / 100) * 360, 0);
                    
                    return (
                      <div key={index} className="text-center">
                        <svg width="100" height="100" className="transform -rotate-90">
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="10"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke={fund.color}
                            strokeWidth="10"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            className="transition-all"
                          />
                        </svg>
                        <p className="text-xs font-bold mt-1" style={{ color: fund.color }}>
                          {fund.amount}%
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-1">
                  {fundingSources.map((fund, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: fund.color }} />
                      <span className="text-xs text-gray-700">{fund.source}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-yellow rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="ClipboardList" className="text-yellow-600" size={28} />
              Поручения главы
            </h2>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded-xl p-4 border-l-4"
                  style={{
                    borderLeftColor: task.priority === 'high' ? '#ef4444' : '#fbbf24',
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{task.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {task.deadline}
                    </Badge>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700 bg-yellow-50/50 p-2 rounded-lg">
                    <Icon name="Lightbulb" size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs">{task.aiTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="glass rounded-3xl p-4 shadow-lg overflow-hidden">
          <div
            className="flex gap-8 whitespace-nowrap animate-marquee"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {[...comments, ...comments, ...comments].map((comment, index) => (
              <span key={index} className="text-sm font-medium text-gray-800">
                {comment}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="glass rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="FileText" className="text-red-500" size={28} />
              Связь мероприятий Администрации с Госпрограммами
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-3 font-bold">Мероприятие</th>
                    <th className="text-left p-3 font-bold">Эффект</th>
                    <th className="text-left p-3 font-bold">Расходы</th>
                    <th className="text-left p-3 font-bold">Госпрограмма</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((prog, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-yellow-50/30">
                      <td className="p-3 font-semibold">{prog.event}</td>
                      <td className="p-3 text-green-700">{prog.effect}</td>
                      <td className="p-3 font-mono text-red-600">{prog.cost}</td>
                      <td className="p-3 text-sm">{prog.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="glass-yellow rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Wand2" className="text-yellow-600" size={28} />
              Конструктор событий
            </h2>
            <div className="space-y-3">
              {[
                { name: 'Документы', icon: 'FileText', items: ['Распоряжения', 'Протоколы', 'Отчёты'] },
                { name: 'Обращения', icon: 'MessageSquare', items: ['Жалобы', 'Предложения', 'Запросы'] },
                { name: 'События', icon: 'Calendar', items: ['Мероприятия', 'Встречи', 'Форумы'] },
                { name: 'Программы', icon: 'BookOpen', items: ['Госпрограммы', 'Нацпроекты', 'Региональные'] },
                { name: 'Нацпроекты', icon: 'Flag', items: ['Образование', 'Здравоохранение', 'Экология'] },
                { name: 'Участники', icon: 'Users', items: ['Администрация', 'НКО', 'Жители'] },
              ].map((section) => (
                <div key={section.name} className="bg-white/60 rounded-xl overflow-hidden border-2 border-yellow-400/30">
                  <button
                    onClick={() => toggleDropdown(section.name)}
                    className="w-full flex items-center justify-between p-3 hover:bg-yellow-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon name={section.icon as any} size={18} className="text-yellow-600" />
                      <span className="font-semibold text-gray-900">{section.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full font-bold">+</span>
                      <Icon
                        name={openDropdowns.includes(section.name) ? 'ChevronUp' : 'ChevronDown'}
                        size={18}
                        className="text-gray-600"
                      />
                    </div>
                  </button>
                  {openDropdowns.includes(section.name) && (
                    <div className="px-3 pb-3 space-y-1.5 bg-yellow-50/30">
                      {section.items.map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer hover:bg-white/60 p-2 rounded-lg">
                          <input type="checkbox" className="rounded border-yellow-500 text-yellow-600 focus:ring-yellow-500" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white rounded-xl">
              Создать событие
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <Card className="glass rounded-3xl p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Icon name="PieChart" className="text-red-500" size={28} />
              Ресурсы
            </h2>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className={`glass-${resource.color === 'red' ? 'red' : resource.color === 'yellow' ? 'yellow' : ''} rounded-xl p-2 ${resource.color === 'blue' ? 'bg-blue-50/50 border-2 border-blue-300/30' : ''}`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon
                      name={resource.icon as any}
                      size={16}
                      className={`text-${resource.color}-600`}
                    />
                    <h3 className="font-bold text-sm text-gray-900">{resource.group}</h3>
                  </div>
                  <ul className="space-y-0.5">
                    {resource.events.map((event, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-start gap-1">
                        <span className="text-xs">•</span>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass rounded-3xl p-4 shadow-lg lg:col-span-3">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Icon name="Map" className="text-red-500" size={28} />
              Интерактивная карта МО
            </h2>
            <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/3da2226d-31fa-41d9-baec-500a1c553955.jpg"
                alt="Карта Дмитровского округа"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 glass rounded-xl p-2">
                <Icon name="MapPin" className="text-red-500" size={20} />
              </div>
              <div className="absolute top-20 right-12 glass-yellow rounded-xl p-2">
                <Icon name="Building" className="text-yellow-600" size={20} />
              </div>
              <div className="absolute bottom-16 left-20 glass-red rounded-xl p-2">
                <Icon name="AlertCircle" className="text-red-600" size={20} />
              </div>
              <div className="absolute top-32 left-32 glass rounded-xl p-2">
                <Icon name="School" className="text-blue-600" size={20} />
              </div>
            </div>
          </Card>

          <Card className="glass rounded-3xl p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Icon name="Settings" className="text-red-500" size={28} />
              Опции
            </h2>
            <div className="space-y-2">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center gap-2 text-sm py-2">
                <Icon name="Camera" size={16} />
                Камеры
              </Button>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-xl flex items-center gap-2 text-sm py-2">
                <Icon name="Users" size={16} />
                НКО
              </Button>
              <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 border-2 border-black rounded-xl flex items-center gap-2 text-sm py-2">
                <Icon name="FileCheck" size={16} />
                Решение
              </Button>
              <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 border-2 border-black rounded-xl flex items-center gap-2 text-sm py-2">
                <Icon name="TrendingUp" size={16} />
                Прогноз
              </Button>
              <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 border-2 border-black rounded-xl flex items-center gap-2 text-sm py-2">
                <Icon name="Share2" size={16} />
                Данные
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;