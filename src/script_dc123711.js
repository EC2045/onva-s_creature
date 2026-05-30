const creatureData = {
            'kororen': {
                title: 'Kororen',
                ref: 'REF: ONV-RT-01 (転錬)',
                subtitle: '小型車輪生物 - Wheel-based organism optimized for plains.',
                img: 'kororin.png',
                body: `
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">概要</h4>
                        <p>ヨーヨー程度のサイズを持つ車輪型生物。平地の多いonvaの環境に完璧に適応し、高速かつ静かに移動する。一見すると人工物のように見えるが、明確な生存本能を持つ生命体である。</p>
                    </section>
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">移動方式・構造</h4>
                        <p>「回転移動」に特化した進化。通常生物の脚移動よりもエネルギー効率が高く、長距離移動に優れる。外側の硬い輪状の殻のみが回転し、内側の本体は固定されている「外輪型」や、中心部がわずかに浮いている「浮遊軸型」など、複数の構造案が研究されている。</p>
                    </section>
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">行動・習性</h4>
                        <p>基本的には野生寄りだが、坂を見ると加速する習性がある。夜間に活発化し、群れで同じ方向へ転がることが多い。振動や音に非常に敏感で、驚くと急加速して逃走する。</p>
                    </section>
                    <section class="bg-white/5 p-6 border-l-2 border-white">
                        <h4 class="text-white text-[10px] font-bold mb-3 uppercase tracking-widest">日常と共生</h4>
                        <p class="text-xs italic mb-2">「あ、コロレンの群れだ」「夜はコロが多いから気をつけて」</p>
                        <p class="text-xs">onvaではありふれた存在であり、子供たちの遊び相手でもある。専用の坂道を作って速さを競わせたり、空き缶でコースを作って誘導したりする光景が見られる。稀に、朝起きると枕元で止まっている個体もいる。</p>
                    </section>
                `,
                stats: [
                    { label: 'Mobility', value: 'High' },
                    { label: 'Risk', value: 'Low' },
                    { label: 'Size', value: 'Small' },
                    { label: 'Type', value: 'Wild' }
                ]
            },
            'suiren': {
                title: 'Suiren',
                ref: 'REF: ONV-RT-02 (水連)',
                subtitle: 'プロペラ型回転生物 - Propeller-driven aquatic biota.',
                img: 'suiren.png',
                body: `
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">概要</h4>
                        <p>輪生動物門に属する、プロペラ型の進化を遂げた生物。見た目は生物と機械の中間のような独特な構造を持ち、水色や白色系の半透明な膜を持つ個体が多い。</p>
                    </section>
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">移動と生息地</h4>
                        <p>体の一部をプロペラのように高速回転させ、水流や空気流を発生させて推進する。水面を滑る、浅瀬を進む、さらには風に乗って滑空する姿も確認される。湖、湿地、雨季の平原など、水辺を主な生息域とする。</p>
                    </section>
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">生態・光学的特徴</h4>
                        <p>非常に温厚で、回転時に発生する流れで微生物や有機物を集めて捕食する。夜間、水面近くで群れが発光する姿は極めて幻想的であり、onvaの観光資源や観賞対象としても高い価値を持つ。</p>
                    </section>
                `,
                stats: [
                    { label: 'Habitat', value: 'Water' },
                    { label: 'Energy', value: 'Organic' },
                    { label: 'Aesthetics', value: 'Tier 1' },
                    { label: 'Activity', value: 'Night' }
                ]
            },
            'worwolf': {
                title: 'Worwolf',
                ref: 'REF: ONV-HM-01',
                subtitle: '狼耳の知的生物 - Specialized Humanoid with Lupine traits.',
                img: 'worwolf.png',
                body: `
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">概要</h4>
                        <p>人間とほぼ同一の身体構造を持ちながら、狼の耳と尻尾を有する種族。銀髪系が多く、耳や尻尾は感情表現と密接にリンクしている。変身怪物としての「ワーウルフ」とは異なる独立した知的生命体である。</p>
                    </section>
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">社会と人間関係</h4>
                        <p>人間社会に深く適応しており、同じ学校に通い、同じ職場で働く姿はonvaでは日常的な風景。群れ文化を好む個体から単独生活を選ぶ者まで多様。野生の鋭い感覚と、人間と同等の理性を併せ持つ。資料の画像はエビルとメイの写真である</p>
                    </section>
                    <section class="bg-white/5 p-6 border-l-2 border-white">
                        <h4 class="text-white text-[10px] font-bold mb-3 uppercase tracking-widest">Infection & Inheritance</h4>
                        <p class="text-xs mb-3">唾液や血液を通じた「感染」により人間がウォーウルフ化する場合がある。これは単なる事故ではなく、命を救うための「医療的延命」や、大切な人を守るための「愛情行為」として、特定の文化圏で意図的に行われることがある。</p>
                        <p class="text-xs">ウォーウルフと人間の間に生まれた子供は、基本的にウォーウルフの特質を継承する。稀に人間として生まれることもあるが、その場合でも高い身体能力を保持することが多い。</p>
                    </section>
                `,
                stats: [
                    { label: 'Intel', value: 'High' },
                    { label: 'Society', value: 'Communal' },
                    { label: 'Sensory', value: 'Extrem' },
                    { label: 'Trait', value: 'Silver' }
                ]
            },
            'warcat': {
                title: 'Warcat',
                ref: 'REF: ONV-HM-02',
                subtitle: '猫耳の知的生物 - High-mobility Humanoid with Feline agility.',
                img: null,
                body: `
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">概要</h4>
                        <p>猫の耳と尻尾を持つ知的種族。ウォーウルフに比べて単独行動を好み、個人の空間と距離感を極めて重要視する。気分屋に見えることもあるが、その観察眼は非常に鋭い。</p>
                    </section>
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">身体能力と移動</h4>
                        <p>極めて高い平衡感覚と身軽さを持ち、屋根、手すり、電線、配管、高架などの三次元的な空間を移動経路として最適化している。音を立てずに移動し、高所からの落下耐性も高い。</p>
                    </section>
                    <section class="bg-white/5 p-6 border-l-2 border-white">
                        <h4 class="text-white text-[10px] font-bold mb-3 uppercase tracking-widest">Inheritance & Lineage</h4>
                        <p class="text-xs">ウォーキャットと人間の間に生まれた子供は、基本的にウォーキャットの特質を強く引き継ぐ。稀に人間として生まれることもあるが、その場合でも並外れた動体視力や反射神経を保持することが多い。ウォーウルフと同様、血統の優位性が明確に現れる種族である。</p>
                    </section>
                    <section class="border border-dashed border-white/20 p-6">
                        <h4 class="text-white text-[10px] font-bold mb-3 uppercase tracking-widest">The "Anti-Observation" Phenomenon</h4>
                        <p class="text-xs italic text-slate-500">「写真を撮らせてくれない個体が多い」</p>
                        <p class="text-xs mt-2">これは彼らにとって、他者の記録媒体に「固定」されることが、自由な流動性と情報のプライバシーを損なう不合理な行為だからである。カメラを向けた瞬間に気配を消す技術は、種族固有の生存戦略に近い。</p>
                    </section>
                `,
                stats: [
                    { label: 'Stealth', value: 'S Class' },
                    { label: 'Agility', value: 'Max' },
                    { label: 'Social', value: 'Solitary' },
                    { label: 'Sight', value: 'Night' }
                ]
            },
            'nerun': {
                title: 'Nerun',
                ref: 'REF: ONV-AM-01 (ネルン)',
                subtitle: '不定形軟体生物 - Amorphous clay-like organism.',
                img: null,
                body: `
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">概要</h4>
                        <p>赤色粘土と灰色粘土が混ざり合ったような質感を持つ、不定形の生物。表面は乾燥した陶土のように見えるが、内部は柔らかく、ゆっくりと形状を変化させ続けている。明確な顔や眼球を持たず、体表からは木工用ボンドや白絵の具に似た白色の粘性液体が垂れている。</p>
                    </section>
                    <section>
                        <h4 class="text-white text-xs font-bold mb-4 uppercase tracking-widest">生態と習性</h4>
                        <p>夜間に非常に緩慢な移動を行う。日中は作業台や壁際で静止しており、完全に「制作途中の粘土作品」に擬態しているため、一般人は生物と認識できない。振動に反応して微妙に形を変え、放置されたアトリエや湿度の高い地下室、廃棄された粘土工房などを好む。</p>
                    </section>
                    <section class="bg-white/5 p-6 border-l-2 border-white">
                        <h4 class="text-white text-[10px] font-bold mb-3 uppercase tracking-widest">特異な能力</h4>
                        <ul class="text-xs space-y-2 list-disc list-inside">
                            <li><strong>修復能力:</strong> 乾燥や破損が起きても、白色液体で再接着し修復できる。完全に分裂した場合でも、断片が再び集合することがある。</li>
                            <li><strong>色素吸収:</strong> 周囲の絵具や顔料を吸収し、表面色がゆっくり変化する。青や緑の顔料を吸収した個体は不自然な模様を形成する。</li>
                        </ul>
                    </section>
                    <section class="border border-dashed border-white/20 p-6">
                        <h4 class="text-white text-[10px] font-bold mb-3 uppercase tracking-widest">作家Rとの関係とONVAでの扱い</h4>
                        <p class="text-xs italic text-slate-500">「ネルンが近くに現れると良い作品が生まれる」</p>
                        <p class="text-xs mt-2">ONVAでは「作品と生物の中間存在」として扱われる。作家Rによって特に好まれており、Rの制作現場に頻繁に出現する。芸術家や造形師の間では意図的にアトリエへ住み着かせる者もいる。一方で、作業台の上で少しずつ位置が変わるため不気味に思われることも多い。</p>
                    </section>
                `,
                stats: [
                    { label: 'Form', value: 'Amorphous' },
                    { label: 'Activity', value: 'Slow/Night' },
                    { label: 'Mimicry', value: 'Clay Art' },
                    { label: 'Habitat', value: 'Atelier' }
                ]
            }
        };

        function openModal(id) {
            const data = creatureData[id];
            const modal = document.getElementById('detail-modal');
            const mediaContainer = document.getElementById('modal-media');
            
            // Set Header
            document.getElementById('modal-ref').textContent = data.ref;
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-subtitle').textContent = data.subtitle;
            document.getElementById('modal-body').innerHTML = data.body;
            
            // Set Media
            if (data.img) {
                mediaContainer.innerHTML = `<img src="${data.img}" class="max-w-full max-h-[500px] object-contain grayscale-[0.2] contrast-[1.1]" alt="${data.title}">`;
            } else {
                mediaContainer.innerHTML = `
                    <div class="no-photo-overlay text-slate-600 border border-white/10 w-full h-full min-h-[300px]">
                        <i class="fas ${id === 'nerun' ? 'fa-shapes' : 'fa-ghost'} text-4xl mb-4"></i>
                        <div class="text-[10px] tracking-[0.4em] font-bold">${id === 'nerun' ? 'UNSTABLE FORM' : 'NON-RECORDABLE SUBJECT'}</div>
                        <div class="text-[8px] mt-2 opacity-50 uppercase">${id === 'nerun' ? 'Mimicry applied by subject' : 'Digital censorship applied by subject'}</div>
                    </div>
                `;
            }

            // Set Stats
            const statsGrid = document.getElementById('modal-stats');
            statsGrid.innerHTML = data.stats.map(s => `
                <div class="data-grid-item">
                    <span class="block text-[8px] text-slate-600 uppercase mb-1 tracking-tighter">${s.label}</span>
                    <span class="text-white text-xs font-bold">${s.value}</span>
                </div>
            `).join('');

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('detail-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
