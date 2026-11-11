/* =========================================================
   Bois Tunisie — i18n (Français / العربية) with RTL support
   SINGLE translations file. FR is the default and is also baked
   statically into the HTML for SEO; this dictionary powers the
   AR toggle and keeps FR text in sync on language switch.
   ========================================================= */
(function (global) {
  'use strict';

  var DICT = {
    fr: {
      'nav.products': 'Produits',
      'nav.gallery': 'Galerie',
      'nav.calc': 'Devis en ligne',
      'nav.export': 'Export / ISPM 15',
      'nav.why': 'Pourquoi nous',
      'nav.process': 'Fabrication',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'nav.cta': 'Demander un devis',

      'hero.eyebrow': "Spécialiste tunisien de l'emballage bois",
      'hero.title': 'Caisses, <span class="hl">emballage &amp; palettes en bois</span> en Tunisie',
      'hero.lead': "Bois Tunisie conçoit et fabrique caisses en bois, emballage industriel sur-mesure et palettes robustes — pour protéger, caler, stocker et exporter vos marchandises partout en Tunisie.",
      'hero.cta1': 'Demander un devis gratuit',
      'hero.cta2': 'Découvrir nos produits →',
      'hero.badge1': 'Livraison partout en Tunisie',
      'hero.badge2': 'Qualité contrôlée & traçabilité',
      'hero.badge3': 'Solutions sur-mesure',
      'hero.badge3plain': 'Sur-mesure',

      'stat.years': "ans d'expérience",
      'stat.refs': 'références au catalogue',
      'stat.families': 'familles de produits',
      'stat.eco': 'bois contrôlé',

      'pf.eyebrow': 'Points forts',
      'pf.title': 'Pourquoi choisir Bois Tunisie',
      'pf.sub': "Trois engagements concrets qui rassurent nos clients de l'industrie, de la logistique et de l'export.",
      'pf.c1.t': 'Protection fiable',
      'pf.c1.d': 'Caisses et emballages bois assemblés à partir de bois sélectionné, pour protéger et caler vos marchandises sans mauvaise surprise.',
      'pf.c2.t': 'Offre complète bois',
      'pf.c2.d': "Caisses, emballage industriel, bois de calage et palettes — formats standards, européens ou entièrement personnalisés sous un même toit.",
      'pf.c3.t': 'Conseil & réactivité',
      'pf.c3.d': "Un interlocuteur dédié, des délais tenus et un appui technique pour dimensionner l'emballage adapté à chaque envoi.",

      'prod.eyebrow': 'Notre gamme',
      'prod.title': "L'emballage bois sous toutes ses formes",
      'prod.sub': "Caisses, emballage sur-mesure, bois de calage et palettes — neufs, réemployés ou traités export, nous ajustons format, résistance et finition à votre cahier des charges.",
      'prod.cta': 'Parler à un conseiller',
      'prod.more': 'En savoir plus →',
      'prod.p1.tag': 'Standard', 'prod.p1.t': 'Palettes neuves', 'prod.p1.d': 'Palettes en bois neuves, inspectées et triées, prêtes à supporter manutention, calage et stockage intensif.',
      'prod.p2.tag': 'Le plus demandé', 'prod.p2.t': 'EUR / EPAL & formats', 'prod.p2.d': "Palettes en bois aux formats européens 120×80 et 120×100, pensées pour la logistique et l'emballage export.",
      'prod.p3.tag': 'Emballage', 'prod.p3.t': 'Caisses en bois', 'prod.p3.d': 'Caisses en bois et emballage industriel robuste pour protéger, caler et transporter vos marchandises en toute sécurité.',
      'prod.p4.tag': 'Projet', 'prod.p4.t': 'Emballage sur-mesure', 'prod.p4.d': 'Caisses, palettes et bois de calage aux dimensions, épaisseurs et charges définies précisément selon votre produit.',
      'prod.p5.tag': 'International', 'prod.p5.t': 'Traitement export ISPM 15', 'prod.p5.d': "Caisses et palettes traitées (HT / ISPM 15) pour l'export, avec marquage et traçabilité documentée.",
      'prod.p6.tag': 'Économique', 'prod.p6.t': 'Palettes réemployées', 'prod.p6.d': "Palettes contrôlées, réparées au besoin et reclassées — une solution d'emballage fiable et économique.",

      'gal.eyebrow': 'Galerie',
      'gal.title': 'Nos emballages bois en images',
      'gal.sub': 'Un aperçu de nos caisses, palettes et finitions. Chaque emballage se personnalise selon vos dimensions et volumes.',
      'gal.g1': 'Palette standard', 'gal.g2': 'Palette EUR / EPAL', 'gal.g3': 'Caisse en bois',
      'gal.g4': 'Palette renforcée', 'gal.g5': 'Emballage sur-mesure', 'gal.g6': 'Palettes empilées',

      'calc.eyebrow': 'Devis instantané',
      'calc.title': 'Estimez votre emballage bois',
      'calc.sub': 'Décrivez votre besoin en quelques secondes et envoyez-le-nous. Un conseiller revient vers vous avec une offre ferme.',
      'calc.type': 'Type de produit',
      'calc.size': 'Format',
      'calc.cond': 'État',
      'calc.cond.new': 'Neuve',
      'calc.cond.used': 'Réemployée',
      'calc.treat': 'Traitement export (HT / ISPM 15)',
      'calc.qty': 'Quantité',
      'calc.unit': 'Prix unitaire estimé',
      'calc.total': 'Total estimé',
      'calc.quoteonly': 'Les prix dépendent du volume, des dimensions et du traitement. Un conseiller vous répond sous 2 heures ouvrables avec une offre ferme.',
      'calc.priceonquote': 'Prix sur devis',
      'calc.note': '* Estimation indicative hors TVA. Le prix final dépend du volume, des dimensions exactes et du traitement.',
      'calc.send': 'Envoyer cette estimation',
      'calc.t.standard': 'Palette standard',
      'calc.t.euro': 'EUR / EPAL',
      'calc.t.crate': 'Caisse en bois',
      'calc.t.heavy': 'Palette renforcée',

      'exp.eyebrow': 'Export',
      'exp.title': "Emballage bois export : traitement ISPM 15",
      'exp.p1': "La norme internationale ISPM 15 encadre les emballages en bois (caisses et palettes) utilisés dans le commerce international. Le bois est traité thermiquement (HT — chauffé à cœur à 56 °C pendant au moins 30 minutes) pour éliminer les parasites, puis marqué d'un cachet officiel attestant le traitement.",
      'exp.p2': "Ce traitement et son marquage sont exigés par de nombreux pays importateurs. Nous vous aidons à choisir la caisse, la palette et le traitement adaptés à votre destination et à votre marchandise.",
      'exp.note': "⚠️ À confirmer : statut d'autorisation/certification ISPM 15 de Bois Tunisie (numéro d'agrément, organisme). Ne pas publier de numéro avant validation.",
      'exp.more': 'Détails du traitement export →',
      'exp.l1.t': "Conforme à l'international", 'exp.l1.d': 'Caisses et palettes bois répondant aux exigences ISPM 15 pour le transport mondial.',
      'exp.l2.t': 'Traitement thermique (HT)', 'exp.l2.d': 'Chauffage à cœur pour assainir le bois, sans produits chimiques.',
      'exp.l3.t': 'Marquage & traçabilité', 'exp.l3.d': 'Cachet de traitement et documentation pour vos formalités douanières.',

      'why.eyebrow': 'Pourquoi nous',
      'why.title': "Un atelier bois tourné vers le détail",
      'why.sub': "Bois Tunisie est un atelier dynamique dédié à l'emballage bois — caisses, palettes et calage — ajusté aux besoins de chaque client.",
      'why.more': 'En savoir plus →',
      'why.1.t': 'Expérience', 'why.1.d': "Un savoir-faire éprouvé dans la fabrication de caisses, d'emballages et de palettes en bois.",
      'why.2.t': 'Fiabilité', 'why.2.d': "Un engagement pour des solutions d'emballage et de transport durables, fiables et rentables.",
      'why.3.t': 'Engagement', 'why.3.d': 'Un service client attentif et des relations de confiance sur le long terme.',

      'proc.eyebrow': 'Notre processus',
      'proc.title': "Du bois brut à l'emballage livré",
      'proc.sub': "Chaque caisse et chaque palette est fabriquée, contrôlée et triée selon vos spécifications avant d'être livrée à temps.",
      'proc.1.t': 'Sélection du bois', 'proc.1.d': 'Matériaux sélectionnés, issus de sources contrôlées.',
      'proc.2.t': 'Fabrication', 'proc.2.d': 'Assemblage précis des caisses et palettes selon les normes et vos spécifications techniques.',
      'proc.3.t': 'Contrôle qualité', 'proc.3.d': 'Inspection, réparation et tri rigoureux pour une qualité garantie.',
      'proc.4.t': 'Livraison', 'proc.4.d': 'Expédition fiable et dans les délais, partout en Tunisie.',

      'zone.eyebrow': 'Zone de livraison',
      'zone.title': 'Nous livrons partout en Tunisie',
      'zone.sub': 'Depuis Mornag (Ben Arous), nous livrons caisses, emballages et palettes vers les zones industrielles et logistiques du pays.',
      'zone.g1': 'Tunis', 'zone.g2': 'Ben Arous', 'zone.g3': 'Ariana', 'zone.g4': 'Manouba', 'zone.g5': 'Nabeul',
      'zone.g6': 'Zaghouan', 'zone.g7': 'Bizerte', 'zone.g8': 'Sousse', 'zone.g9': 'Sfax',
      'zone.more': '+ autres gouvernorats — à confirmer',

      'test.eyebrow': 'Témoignages',
      'test.title': 'Ce que disent nos clients',
      'test.sub': 'Emplacements réservés — à remplacer par de vrais avis clients (avec accord).',
      'test.ph': '« Témoignage client à venir — en attente de validation. »',
      'test.by': 'Client à confirmer — Secteur / Ville',
      'test.trusted': 'Ils nous font confiance',

      'about.eyebrow': 'Qui sommes-nous',
      'about.title': 'La Société Galgaoui',
      'about.p1': 'Bois Tunisie, la Société Galgaoui, conçoit et fabrique caisses, emballages industriels et palettes en bois en Tunisie. Nous plaçons la qualité, la fiabilité et la satisfaction client au cœur de tout ce que nous faisons.',
      'about.p2': 'Nous privilégions un bois issu de sources contrôlées et un assemblage soigné, pour des emballages et palettes durables et fiables.',
      'about.badge': "années d'expertise",
      'about.pill1': 'Gestion de la qualité', 'about.pill2': 'Traçabilité', 'about.pill3': 'Matériaux contrôlés', 'about.pill4': 'Livraison fiable',

      'cta.title': "Un projet d'emballage bois ? Parlons-en.",
      'cta.sub': 'Recevez un devis gratuit et personnalisé sous 2 heures ouvrables.',
      'cta.quote': 'Demander un devis',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Demandez votre devis',
      'contact.sub': "Notre équipe vous répond sous 2 heures ouvrables avec une offre d'emballage bois adaptée à vos volumes et formats.",
      'contact.phone': 'Téléphone', 'contact.email': 'Email', 'contact.addr': 'Adresse',
      'contact.addrval': 'Boujardgua, Mornag, Ben Arous — Tunisie',
      'contact.map': 'Voir sur Google Maps →',
      'form.name': 'Nom complet', 'form.name.ph': 'Votre nom',
      'form.company': 'Société', 'form.company.ph': 'Nom de votre société',
      'form.phone': 'Téléphone', 'form.phone.ph': '+216 ...',
      'form.email': 'Email', 'form.email.ph': 'vous@entreprise.com',
      'form.need': 'Besoin', 'form.need.ph': 'Sélectionnez…',
      'form.monthly': 'Quantité mensuelle estimée', 'form.monthly.ph': 'Sélectionnez…',
      'form.msg': 'Message', 'form.msg.ph': 'Quantité, dimensions, délais…',
      'form.send': 'Envoyer la demande',
      'form.ok': '✔ Merci, nous répondons sous 2 heures ouvrables.',
      'form.sending': 'Envoi en cours…',
      'form.err': "Une erreur s'est produite. Écrivez-nous directement sur WhatsApp :",
      'form.err.wa': 'Contacter sur WhatsApp',
      'form.invalid.name': 'Veuillez indiquer votre nom.',
      'form.invalid.phone': 'Numéro de téléphone tunisien invalide (ex : +216 51 886 122).',
      'form.invalid.email': 'Adresse email invalide.',

      'foot.tag': "Fabrication de caisses, d'emballage bois et de palettes en Tunisie.",
      'foot.products': 'Produits', 'foot.company': 'Entreprise', 'foot.contact': 'Contact',
      'foot.follow': 'Suivez-nous',
      'foot.privacy': 'Confidentialité', 'foot.legal': 'Mentions légales',
      'foot.rights': 'Bois Tunisie — Société Galgaoui. Tous droits réservés.',
      'foot.made': 'Bois contrôlé · Fabriqué en Tunisie 🇹🇳',

      'consent.text': "Nous utilisons des cookies de mesure d'audience pour améliorer le site. Vous pouvez accepter ou refuser.",
      'consent.accept': 'Accepter', 'consent.decline': 'Refuser', 'consent.more': 'En savoir plus'
    },

    ar: {
      'nav.products': 'المنتجات',
      'nav.gallery': 'المعرض',
      'nav.calc': 'طلب عرض سعر',
      'nav.export': 'التصدير / ISPM 15',
      'nav.why': 'لماذا نحن',
      'nav.process': 'التصنيع',
      'nav.about': 'من نحن',
      'nav.contact': 'اتصل بنا',
      'nav.cta': 'اطلب عرض سعر',

      'hero.eyebrow': 'مختصّ تونسي في التغليف الخشبي',
      'hero.title': 'صناديق <span class="hl">وتغليف وباليت خشبي</span> في تونس',
      'hero.lead': 'تصمّم Bois Tunisie وتصنع صناديق خشبية وتغليفًا صناعيًا حسب الطلب وباليت متينة — لحماية بضائعك وإسنادها وتخزينها وتصديرها في كامل تونس.',
      'hero.cta1': 'اطلب عرض سعر مجاني',
      'hero.cta2': '← اكتشف منتجاتنا',
      'hero.badge1': 'توصيل في كامل تونس',
      'hero.badge2': 'جودة مراقَبة وتتبُّع',
      'hero.badge3': 'حلول حسب الطلب',
      'hero.badge3plain': 'حسب الطلب',

      'stat.years': 'سنة خبرة',
      'stat.refs': 'مرجع في الكتالوج',
      'stat.families': 'عائلات منتجات',
      'stat.eco': 'خشب مراقَب',

      'pf.eyebrow': 'نقاط القوة',
      'pf.title': 'لماذا تختار Bois Tunisie',
      'pf.sub': 'ثلاثة التزامات ملموسة تطمئن عملاءنا في الصناعة واللوجستيك والتصدير.',
      'pf.c1.t': 'حماية موثوقة',
      'pf.c1.d': 'صناديق وتغليف خشبي من خشب مختار، لحماية بضائعك وإسنادها دون مفاجآت.',
      'pf.c2.t': 'عرض خشبي متكامل',
      'pf.c2.d': 'صناديق وتغليف صناعي وخشب إسناد وباليت — بمقاسات قياسية أو أوروبية أو مخصّصة بالكامل تحت سقف واحد.',
      'pf.c3.t': 'استشارة وسرعة استجابة',
      'pf.c3.d': 'مخاطب مخصّص، واحترام الآجال، ودعم تقني لتحديد التغليف الملائم لكل شحنة.',

      'prod.eyebrow': 'تشكيلتنا',
      'prod.title': 'التغليف الخشبي بكل أشكاله',
      'prod.sub': 'صناديق وتغليف حسب الطلب وخشب إسناد وباليت — جديدة أو مُعاد استعمالها أو معالَجة للتصدير، نضبط المقاس والمتانة والتشطيب حسب كرّاس شروطك.',
      'prod.cta': 'تحدّث إلى مستشار',
      'prod.more': '← اعرف المزيد',
      'prod.p1.tag': 'قياسية', 'prod.p1.t': 'منصّات جديدة', 'prod.p1.d': 'منصّات خشبية جديدة، مفحوصة ومفرزة، جاهزة للمناولة والإسناد والتخزين المكثّف.',
      'prod.p2.tag': 'الأكثر طلبًا', 'prod.p2.t': 'EUR / EPAL ومقاسات', 'prod.p2.d': 'منصّات خشبية بمقاسات أوروبية 120×80 و120×100، مصمّمة للّوجستيك وتغليف التصدير.',
      'prod.p3.tag': 'تغليف', 'prod.p3.t': 'صناديق خشبية', 'prod.p3.d': 'صناديق خشبية وتغليف صناعي متين لحماية بضائعك وإسنادها ونقلها بأمان.',
      'prod.p4.tag': 'مشروع', 'prod.p4.t': 'تغليف حسب الطلب', 'prod.p4.d': 'صناديق وباليت وخشب إسناد بأبعاد وسماكات وحمولات مصمَّمة بدقّة حسب منتجك.',
      'prod.p5.tag': 'دولي', 'prod.p5.t': 'معالجة التصدير ISPM 15', 'prod.p5.d': 'صناديق وباليت معالَجة (HT / ISPM 15) للتصدير، مع وسم وتتبُّع موثّق.',
      'prod.p6.tag': 'اقتصادية', 'prod.p6.t': 'منصّات مُعاد استعمالها', 'prod.p6.d': 'منصّات مفحوصة ومُصلَحة عند الحاجة ومُعاد تصنيفها — حلّ تغليف موثوق واقتصادي.',

      'gal.eyebrow': 'المعرض',
      'gal.title': 'تغليفنا الخشبي بالصور',
      'gal.sub': 'لمحة عن صناديقنا وباليتنا وتشطيباتنا. كل تغليف قابل للتخصيص حسب أبعادك وكمياتك.',
      'gal.g1': 'منصّة قياسية', 'gal.g2': 'منصّة EUR / EPAL', 'gal.g3': 'صندوق خشبي',
      'gal.g4': 'منصّة مقوّاة', 'gal.g5': 'تغليف حسب الطلب', 'gal.g6': 'منصّات مكدّسة',

      'calc.eyebrow': 'تقدير فوري',
      'calc.title': 'قدّر تغليفك الخشبي',
      'calc.sub': 'صف حاجتك في ثوانٍ وأرسلها إلينا. يعود إليك مستشار بعرض نهائي.',
      'calc.type': 'نوع المنتج',
      'calc.size': 'المقاس',
      'calc.cond': 'الحالة',
      'calc.cond.new': 'جديدة',
      'calc.cond.used': 'مُعاد استعمالها',
      'calc.treat': 'معالجة للتصدير (HT / ISPM 15)',
      'calc.qty': 'الكمية',
      'calc.unit': 'السعر التقريبي للوحدة',
      'calc.total': 'المجموع التقريبي',
      'calc.quoteonly': 'تتعلق الأسعار بالكمية والأبعاد والمعالجة. يردّ عليك مستشار خلال ساعتين عمل بعرض نهائي.',
      'calc.priceonquote': 'السعر حسب العرض',
      'calc.note': '* تقدير تقريبي دون احتساب الأداء. السعر النهائي يتعلق بالكمية والأبعاد الدقيقة والمعالجة.',
      'calc.send': 'أرسل هذا التقدير',
      'calc.t.standard': 'منصّة قياسية',
      'calc.t.euro': 'EUR / EPAL',
      'calc.t.crate': 'صندوق خشبي',
      'calc.t.heavy': 'منصّة مقوّاة',

      'exp.eyebrow': 'التصدير',
      'exp.title': 'تغليف خشبي للتصدير: معالجة ISPM 15',
      'exp.p1': 'تنظّم المواصفة الدولية ISPM 15 التغليف الخشبي (الصناديق والباليت) المستعمل في التجارة الدولية. يُعالَج الخشب حراريًا (HT — تسخين إلى 56 °م لمدة 30 دقيقة على الأقل) للقضاء على الآفات، ثم يُوسَم بختم رسمي يثبت المعالجة.',
      'exp.p2': 'تشترط العديد من الدول المستورِدة هذه المعالجة ووسمها. نساعدك على اختيار الصندوق والباليت والمعالجة الملائمة لوجهتك وبضاعتك.',
      'exp.note': '⚠️ للتأكيد: وضعية اعتماد/ترخيص Bois Tunisie لـ ISPM 15 (رقم الاعتماد، الجهة). لا تنشر أي رقم قبل التحقّق.',
      'exp.more': '← تفاصيل معالجة التصدير',
      'exp.l1.t': 'مطابقة دوليًا', 'exp.l1.d': 'صناديق وباليت خشبية تلبّي متطلبات ISPM 15 للنقل العالمي.',
      'exp.l2.t': 'معالجة حرارية (HT)', 'exp.l2.d': 'تسخين عميق لتعقيم الخشب، دون مواد كيميائية.',
      'exp.l3.t': 'الوسم والتتبُّع', 'exp.l3.d': 'ختم المعالجة والوثائق لإجراءاتك الجمركية.',

      'why.eyebrow': 'لماذا نحن',
      'why.title': 'ورشة خشب مهتمّة بالتفاصيل',
      'why.sub': 'Bois Tunisie ورشة ديناميكية متخصّصة في التغليف الخشبي — صناديق وباليت وإسناد — مضبوطة حسب احتياجات كل عميل.',
      'why.more': '← اعرف المزيد',
      'why.1.t': 'الخبرة', 'why.1.d': 'دراية راسخة في صناعة الصناديق والتغليف والباليت الخشبية.',
      'why.2.t': 'الموثوقية', 'why.2.d': 'التزام بحلول تغليف ونقل مستدامة وموثوقة ومجدية.',
      'why.3.t': 'الالتزام', 'why.3.d': 'خدمة عملاء مهتمّة وعلاقات ثقة على المدى الطويل.',

      'proc.eyebrow': 'مسارنا',
      'proc.title': 'من الخشب الخام إلى تغليف مُسلَّم',
      'proc.sub': 'كل صندوق وكل منصّة يُصنَع ويُراقَب ويُفرَز حسب مواصفاتك قبل تسليمه في الوقت المحدّد.',
      'proc.1.t': 'اختيار الخشب', 'proc.1.d': 'مواد مختارة من مصادر مراقَبة.',
      'proc.2.t': 'التصنيع', 'proc.2.d': 'تجميع دقيق للصناديق والباليت حسب المعايير ومواصفاتك التقنية.',
      'proc.3.t': 'مراقبة الجودة', 'proc.3.d': 'فحص وإصلاح وفرز دقيق لجودة مضمونة.',
      'proc.4.t': 'التوصيل', 'proc.4.d': 'شحن موثوق وفي الآجال، في كامل تونس.',

      'zone.eyebrow': 'منطقة التوصيل',
      'zone.title': 'نوصّل في كامل تونس',
      'zone.sub': 'انطلاقًا من مرناق (بن عروس)، نوصّل الصناديق والتغليف والباليت نحو المناطق الصناعية واللوجستية في البلاد.',
      'zone.g1': 'تونس', 'zone.g2': 'بن عروس', 'zone.g3': 'أريانة', 'zone.g4': 'منوبة', 'zone.g5': 'نابل',
      'zone.g6': 'زغوان', 'zone.g7': 'بنزرت', 'zone.g8': 'سوسة', 'zone.g9': 'صفاقس',
      'zone.more': '+ ولايات أخرى — للتأكيد',

      'test.eyebrow': 'آراء العملاء',
      'test.title': 'ماذا يقول عملاؤنا',
      'test.sub': 'أماكن محجوزة — تُستبدل بآراء عملاء حقيقية (بموافقتهم).',
      'test.ph': '« رأي عميل قادم — في انتظار التأكيد. »',
      'test.by': 'عميل للتأكيد — القطاع / المدينة',
      'test.trusted': 'يثقون بنا',

      'about.eyebrow': 'من نحن',
      'about.title': 'شركة القلقاوي',
      'about.p1': 'Bois Tunisie، شركة القلقاوي، تصمّم وتصنع الصناديق والتغليف الصناعي والباليت الخشبية في تونس. نضع الجودة والموثوقية ورضا العميل في صميم كل ما نقوم به.',
      'about.p2': 'نفضّل خشبًا من مصادر مراقَبة وتجميعًا متقنًا، من أجل تغليف وباليت متينة وموثوقة.',
      'about.badge': 'سنوات خبرة',
      'about.pill1': 'إدارة الجودة', 'about.pill2': 'التتبُّع', 'about.pill3': 'مواد مراقَبة', 'about.pill4': 'توصيل موثوق',

      'cta.title': 'لديك مشروع تغليف خشبي؟ لنتحدّث.',
      'cta.sub': 'احصل على عرض سعر مجاني ومخصّص خلال ساعتين عمل.',
      'cta.quote': 'اطلب عرض سعر',

      'contact.eyebrow': 'اتصل بنا',
      'contact.title': 'اطلب عرض سعرك',
      'contact.sub': 'يردّ فريقنا خلال ساعتين عمل بعرض تغليف خشبي يلائم كمياتك ومقاساتك.',
      'contact.phone': 'الهاتف', 'contact.email': 'البريد الإلكتروني', 'contact.addr': 'العنوان',
      'contact.addrval': 'بوجرڨة، مرناق، بن عروس — تونس',
      'contact.map': '← عرض على خرائط Google',
      'form.name': 'الاسم الكامل', 'form.name.ph': 'اسمك',
      'form.company': 'الشركة', 'form.company.ph': 'اسم شركتك',
      'form.phone': 'الهاتف', 'form.phone.ph': '+216 ...',
      'form.email': 'البريد الإلكتروني', 'form.email.ph': 'you@company.com',
      'form.need': 'الحاجة', 'form.need.ph': 'اختر…',
      'form.monthly': 'الكمية الشهرية المقدّرة', 'form.monthly.ph': 'اختر…',
      'form.msg': 'رسالة', 'form.msg.ph': 'الكمية، الأبعاد، الآجال…',
      'form.send': 'إرسال الطلب',
      'form.ok': '✔ شكرًا، نردّ عليك خلال ساعتين عمل.',
      'form.sending': 'جارٍ الإرسال…',
      'form.err': 'حدث خطأ. راسلنا مباشرة عبر واتساب:',
      'form.err.wa': 'تواصل عبر واتساب',
      'form.invalid.name': 'يرجى إدخال اسمك.',
      'form.invalid.phone': 'رقم هاتف تونسي غير صالح (مثال: +216 51 886 122).',
      'form.invalid.email': 'عنوان بريد إلكتروني غير صالح.',

      'foot.tag': 'صناعة الصناديق والتغليف الخشبي والباليت في تونس.',
      'foot.products': 'المنتجات', 'foot.company': 'الشركة', 'foot.contact': 'اتصل بنا',
      'foot.follow': 'تابعنا',
      'foot.privacy': 'الخصوصية', 'foot.legal': 'إشعار قانوني',
      'foot.rights': 'Bois Tunisie — شركة القلقاوي. كل الحقوق محفوظة.',
      'foot.made': 'خشب مراقَب · صُنع في تونس 🇹🇳',

      'consent.text': 'نستعمل ملفات تعريف الارتباط لقياس الجمهور وتحسين الموقع. يمكنك القبول أو الرفض.',
      'consent.accept': 'قبول', 'consent.decline': 'رفض', 'consent.more': 'اعرف المزيد'
    }
  };

  function apply(lang) {
    var d = DICT[lang] || DICT.fr;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] === undefined) return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = d[k];
      else el.textContent = d[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (d[k] !== undefined) el.setAttribute('placeholder', d[k]);
    });

    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      var match = b.getAttribute('data-lang-btn') === lang;
      b.classList.toggle('active', match);
      b.setAttribute('aria-pressed', String(match));
    });
    try { localStorage.setItem('sgp-lang', lang); } catch (e) {}
    global.SGP_LANG = lang;
    document.dispatchEvent(new CustomEvent('sgp:lang', { detail: { lang: lang, dict: d } }));
  }

  function t(key) { var d = DICT[global.SGP_LANG] || DICT.fr; return d[key] || key; }

  // Priority: ?lang= URL param (for hreflang AR URL) > saved preference > FR default.
  function initialLang() {
    try {
      var p = new URLSearchParams(global.location.search).get('lang');
      if (p === 'ar' || p === 'fr') return p;
    } catch (e) {}
    try { var saved = localStorage.getItem('sgp-lang'); if (saved === 'ar' || saved === 'fr') return saved; } catch (e) {}
    return 'fr';
  }

  global.SGPi18n = {
    apply: apply,
    t: t,
    dict: DICT,
    init: function () {
      apply(initialLang());
      document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
        b.addEventListener('click', function () { apply(b.getAttribute('data-lang-btn')); });
      });
    }
  };
})(window);
