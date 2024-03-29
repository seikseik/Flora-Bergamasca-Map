var specie = [
  "Abutilon theophrasti Medik.",
  "Acalypha australis L.",
  "Acalypha virginica L.",
  "Acanthus mollis L.",
  "Acer campestre L.",
  "Acer negundo L.",
  "Acer platanoides L.",
  "Acer pseudoplatanus L.",
  "Acer saccharinum L.",
  "Achillea collina Becker ex Rchb.",
  "Achillea millefolium L.",
  "Achillea ptarmica L.",
  "Achillea roseoalba Ehrend.",
  "Achillea setacea Waldst. & Kit.",
  "Achillea stricta Schleich. ex Gremli",
  "Achnatherum calamagrostis (L.) P. Beauv.",
  "Acinos arvensis (Lam.) Dandy",
  "Actinidia chinensis Planch.",
  "Adiantum capillus-veneris L.",
  "Aegopodium podagraria L.",
  "Aesculus hippocastanum L.",
  "Aethusa cynapium L.",
  "Agrimonia eupatoria L.",
  "Agrostis capillaris L.",
  "Agrostis stolonifera L. s.str.",
  "Ailanthus altissima (Mill.) Swingle",
  "Ajuga chamaepitys (L.) Schreb.",
  "Ajuga genevensis L.",
  "Ajuga reptans L.",
  "Albizia julibrissin (Willd.) Durazz.",
  "Alcea rosea L.",
  "Alisma plantago-aquatica L.",
  "Alliaria petiolata (M. Bieb.) Cavara & Grande",
  "Allium carinatum L.",
  "Allium neapolitanum Cirillo",
  "Allium oleraceum L.",
  "Allium ursinum L.",
  "Allium vineale L.",
  "Alnus glutinosa (L.) Gaertn.",
  "Alopecurus geniculatus L.",
  "Alopecurus myosuroides Huds.",
  "Alopecurus pratensis L.",
  "Alopecurus rendlei Eig",
  "Althaea hirsuta L.",
  "Amaranthus albus L.",
  "Amaranthus blitum L.",
  "Amaranthus cruentus L.",
  "Amaranthus deflexus L.",
  "Amaranthus graecizans L.",
  "Amaranthus hybridus L.",
  "Amaranthus hypochondriacus L.",
  "Amaranthus powellii S. Watson",
  "Amaranthus retroflexus L.",
  "Amaranthus viridis L.",
  "Ambrosia artemisiifolia L.",
  "Amorpha fruticosa L.",
  "Amsinckia lycopsoides (Lehm.) Lehm.",
  "Anacamptis pyramidalis (L.) Rich.",
  "Anagallis arvensis L.",
  "Anagallis foemina Mill.",
  "Anchusa azurea Mill.",
  "Anemone nemorosa L.",
  "Anemone ranunculoides L.",
  "Angelica sylvestris L.",
  "Anthemis arvensis L.",
  "Anthericum liliago L.",
  "Anthericum ramosum L.",
  "Anthoxanthum odoratum L. s.str.",
  "Anthriscus caucalis M. Bieb.",
  "Anthriscus sylvestris (L.) Hoffm.",
  "Anthyllis vulneraria L.",
  "Antirrhinum majus L.",
  "Apera spica-venti (L.) P. Beauv.",
  "Aphanes arvensis L.",
  "Apium graveolens L.",
  "Aquilegia vulgaris L.",
  "Arabidopsis halleri (L.) O‚ÄôKane & Al-Shehb.",
  "Arabidopsis thaliana (L.) Heynh.",
  "Arabis alpina L.",
  "Arabis hirsuta (L.) Scop.",
  "Arctium lappa L.",
  "Arctium minus (Hill) Bernh.",
  "Arctostaphylos uva-ursi (L.) Spreng.",
  "Arenaria leptoclados (Rchb.) Guss.",
  "Arenaria serpyllifolia L.",
  "Aristolochia clematitis L.",
  "Armoracia rusticana P. Gaertn., B. Mey. & Scherb.",
  "Arrhenatherum elatius (L.) P. Beauv. ex J. Presl & C. Presl",
  "Artemisia absinthium L.",
  "Artemisia annua L.",
  "Artemisia verlotiorum Lamotte",
  "Artemisia vulgaris L.",
  "Arum italicum Mill.",
  "Arum maculatum L.",
  "Aruncus dioicus (Walter) Fernald",
  "Arundo donax L.",
  "Asarum europaeum L.",
  "Asclepias syriaca L.",
  "Asparagus officinalis L.",
  "Asperula purpurea (L.) Ehrend.",
  "Asplenium adiantum-nigrum L.",
  "Asplenium ceterach L.",
  "Asplenium ruta-muraria L.",
  "Asplenium scolopendrium L.",
  "Asplenium trichomanes L.",
  "Aster amellus L.",
  "Astragalus glycyphyllos L.",
  "Athyrium filix-femina (L.) Roth",
  "Atriplex patula L.",
  "Atriplex prostrata Boucher ex DC.",
  "Aubrieta deltoidea (L.) DC.",
  "Aucuba japonica Thunb.",
  "Avena barbata Pott ex Link",
  "Avena fatua L.",
  "Avena sativa L.",
  "Avena sterilis L.",
  "Ballota nigra L.",
  "Barbarea vulgaris R. Br.",
  "Bassia scoparia (L.) A.J. Scott",
  "Bellis perennis L.",
  "Berberis julianae Schneid.",
  "Berberis vulgaris L.",
  "Berula erecta (Huds.) Coville",
  "Betonica officinalis L.",
  "Betula pendula Roth",
  "Bidens bipinnatus L.",
  "Bidens frondosus L.",
  "Bifora radians M. Bieb.",
  "Blackstonia perfoliata (L.) Huds. s.str.",
  "Blechnum spicant (L.) Roth",
  "Borago officinalis L.",
  "Bothriochloa ischaemum (L.) Keng",
  "Brachypodium rupestre (Host) Roem. & Schult.",
  "Brachypodium sylvaticum (Huds.) Beauv.",
  "Brassica napus L.",
  "Brassica oleracea L.",
  "Brassica rapa L.",
  "Briza maxima L.",
  "Briza media L.",
  "Bromus catharticus Vahl",
  "Bromus diandrus Roth",
  "Bromus erectus Huds.",
  "Bromus hordeaceus L.",
  "Bromus inermis Leyss.",
  "Bromus madritensis L.",
  "Bromus sterilis L.",
  "Broussonetia papyrifera (L.) Vent.",
  "Bryonia dioica Jacq.",
  "Buddleja davidii Franch.",
  "Buglossoides arvensis (L.) I.M. Johnst.",
  "Buglossoides incrassata (Guss.) I.M. Johnst.",
  "Buglossoides purpurocaerulea (L.) I.M. Johnst.",
  "Buphthalmum salicifolium L.",
  "Calamintha einseleana F. Schultz",
  "Calamintha glandulosa (Req.) Benth.",
  "Calendula officinalis L.",
  "Calepina irregularis (Asso) Thell.",
  "Calluna vulgaris (L.) Hull",
  "Calystegia sepium (L.) R. Br.",
  "Calystegia sylvatica (Kit.) Griseb.",
  "Campanula patula L.",
  "Campanula rapunculoides L.",
  "Campanula rapunculus L.",
  "Campanula sibirica L.",
  "Campanula trachelium L.",
  "Capparis spinosa L.",
  "Capsella bursa-pastoris (L.) Medik.",
  "Capsella grandiflora (Fauch√© & Chaub.) Boiss.",
  "Capsella rubella Reut.",
  "Cardamine amara L.",
  "Cardamine bulbifera (L.) Crantz",
  "Cardamine flexuosa With.",
  "Cardamine hirsuta L.",
  "Cardamine impatiens L.",
  "Cardamine matthioli Moretti",
  "Carduus pycnocephalus L.",
  "Carex acutiformis Ehrh.",
  "Carex brizoides L.",
  "Carex caryophyllea Latourr.",
  "Carex digitata L.",
  "Carex distans L.",
  "Carex divulsa Stokes s.str.",
  "Carex flacca Schreb.",
  "Carex flava L. s.str.",
  "Carex guestphalica (Boenn. ex Rchb.) Boenn. ex O. Lang",
  "Carex halleriana Asso",
  "Carex hirta L.",
  "Carex humilis Leyss.",
  "Carex leporina L.",
  "Carex montana L.",
  "Carex otrubae Podp.",
  "Carex pairae F.W. Schultz",
  "Carex pallescens L.",
  "Carex panicea L.",
  "Carex pendula Huds.",
  "Carex pilosa Scop.",
  "Carex pilulifera L.",
  "Carex remota L.",
  "Carex spicata Huds.",
  "Carex sylvatica Huds.",
  "Carex tomentosa L.",
  "Carex umbrosa Host",
  "Carlina vulgaris L.",
  "Carpinus betulus L.",
  "Carum carvi L.",
  "Castanea sativa Mill.",
  "Catalpa bignonioides Walter",
  "Catapodium rigidum (L.) C.E. Hubb. ex Dony",
  "Celtis australis L.",
  "Centaurea calcitrapa L.",
  "Centaurea jacea L.",
  "Centaurea nigrescens Willd.",
  "Centaurea scabiosa L.",
  "Centaurea stoebe L.",
  "Centaurium erythraea Rafn",
  "Centranthus ruber (L.) DC.",
  "Cephalanthera damasonium (Mill.) Druce",
  "Cephalanthera longifolia (L.) Fritsch",
  "Cerastium brachypetalum Desp. ex Pers.",
  "Cerastium glomeratum Thuill.",
  "Cerastium glutinosum Fr.",
  "Cerastium holosteoides Fr.",
  "Cerastium semidecandrum L.",
  "Cerastium tomentosum L.",
  "Cercis siliquastrum L.",
  "Cerinthe minor L.",
  "Chaenorhinum minus (L.) Lange",
  "Chaerophyllum hirsutum L.",
  "Chaerophyllum temulum L.",
  "Chamaecerasus nitida E. H. Wilson",
  "Chelidonium majus L.",
  "Chenopodium album L.",
  "Chenopodium polyspermum L.",
  "Chondrilla juncea L.",
  "Chrysopogon gryllus (L.) Trin.",
  "Cichorium intybus L.",
  "Circaea lutetiana L.",
  "Cirsium arvense (L.) Scop.",
  "Cirsium eriophorum (L.) Scop.",
  "Cirsium pannonicum (L. f.) Link",
  "Cirsium vulgare (Savi) Ten.",
  "Clematis recta L.",
  "Clematis vitalba L.",
  "Clerodendron trichotomum Thunb.",
  "Clinopodium vulgare L.",
  "Colchicum autumnale L.",
  "Commelina communis L.",
  "Conium maculatum L.",
  "Consolida ajacis (L.) Schur",
  "Consolida regalis Gray",
  "Convallaria majalis L.",
  "Convolvulus arvensis L.",
  "Cornus mas L.",
  "Cornus sanguinea L.",
  "Coronopus didymus (L.) Sm.",
  "Coronopus squamatus (Forssk.)",
  "Corylus avellana L.",
  "Cotinus coggygria Scop.",
  "Cotoneaster horizontalis Decne.",
  "Crataegus laevigata (Poir.) DC.",
  "Crataegus monogyna Jacq.",
  "Crepis biennis L.",
  "Crepis capillaris (L.) Wallr.",
  "Crepis foetida L.",
  "Crepis pulchra L.",
  "Crepis sancta (L.) Babc.",
  "Crepis setosa Haller f.",
  "Crepis vesicaria L.",
  "Crocus biflorus Mill.",
  "Cruciata glabra (L.) Ehrend.",
  "Cruciata laevipes Opiz",
  "Cucubalus baccifer L.",
  "Cuscuta europaea L.",
  "Cuscuta scandens Brot.",
  "Cyanus segetum Hill",
  "Cyanus triumfettii (All.) Dost√°l ex √Å. & D. L√∂ve",
  "Cymbalaria muralis P. Gaertn., B. Mey. & Scherb.",
  "Cynodon dactylon (L.) Pers.",
  "Cynosurus cristatus L.",
  "Cyperus eragrostis Lam.",
  "Cyperus fuscus L.",
  "Cyperus longus L.",
  "Cyrtomium fortunei J. Sm.",
  "Cytisophyllum sessilifolium (L.) A.F. L√°ng",
  "Cytisus hirsutus L.",
  "Cytisus nigricans L.",
  "Cytisus scoparius (L.) Link",
  "Dactylis glomerata L.",
  "Danthonia alpina Vest",
  "Danthonia decumbens (L.) DC.",
  "Daphne laureola L.",
  "Daphne mezereum L.",
  "Datura stramonium L.",
  "Daucus carota L.",
  "Deschampsia cespitosa (L.) P. Beauv.",
  "Dianthus armeria L.",
  "Dianthus seguieri Vill.",
  "Dianthus sylvestris Wulf.",
  "Dichondra micrantha Urb.",
  "Digitalis lutea L.",
  "Digitaria ischaemum (Schreb. ex Schweigg.) Schreb. ex M√ºhl.",
  "Digitaria sanguinalis (L.) Scop.",
  "Dioscorea communis (L.) Caddick & Wilkin",
  "Diplotaxis erucoides (L.) DC.",
  "Diplotaxis muralis (L.) DC.",
  "Diplotaxis tenuifolia (L.) DC.",
  "Dipsacus fullonum L.",
  "Dittrichia viscosa (L.) Greuter",
  "Doronicum pardalianches L.",
  "Dorycnium herbaceum Vill.",
  "Draba muralis L.",
  "Draba verna L.",
  "Dryopteris affinis (Lowe) Fraser-Jenk.",
  "Dryopteris carthusiana (Vill.) H.P. Fuchs",
  "Dryopteris dilatata (Hoffm.) A. Gray",
  "Dryopteris filix-mas (L.) Schott",
  "Dysphania ambrosioides (L.)",
  "Echinochloa crus-galli (L.) P. Beauv.",
  "Echium vulgare L.",
  "Elaeagnus pungens Thunb.",
  "Eleocharis palustris (L.) Roem. & Schult.",
  "Eleusine indica (L.) Gaertn.",
  "Elymus caninus (L.) L.",
  "Elymus repens (L.) Gould",
  "Epilobium angustifolium L.",
  "Epilobium dodonaei Vill.",
  "Epilobium hirsutum L.",
  "Epilobium obscurum Schreb.",
  "Epilobium tetragonum L.",
  "Equisetum arvense L.",
  "Equisetum palustre L.",
  "Equisetum ramosissimum Desf.",
  "Equisetum telmateia Ehrh.",
  "Eragrostis cilianensis (All.) Vignolo",
  "Eragrostis minor Host",
  "Eragrostis pectinacea (Michx.) Nees",
  "Eragrostis pilosa (L.) P. Beauv.",
  "Eragrostis virescens J. Presl",
  "Erigeron annuus (L.) Pers.",
  "Erigeron canadensis L.",
  "Erigeron karvinskianus DC.",
  "Erigeron sumatrensis Retz.",
  "Erodium cicutarium (L.) L‚ÄôH√©r.",
  "Erodium malacoides (L.) L‚ÄôH√©r.",
  "Erodium moschatum (L.) L‚ÄôH√©r.",
  "Eruca sativa Mill.",
  "Eryngium campestre L.",
  "Eryobotrya japonica (Thunb.) Lindl.",
  "Erythronium dens-canis L.",
  "Euonymus europaeus L.",
  "Eupatorium cannabinum L.",
  "Euphorbia amygdaloides L.",
  "Euphorbia carniolica Jacq.",
  "Euphorbia cyparissias L.",
  "Euphorbia dulcis L.",
  "Euphorbia exigua L.",
  "Euphorbia falcata L.",
  "Euphorbia helioscopia L.",
  "Euphorbia hypericifolia L.",
  "Euphorbia lathyris L.",
  "Euphorbia maculata L.",
  "Euphorbia nutans Lag.",
  "Euphorbia peplus L.",
  "Euphorbia platyphyllos L.",
  "Euphorbia prostrata Aiton",
  "Euphorbia segetalis L.",
  "Euphorbia verrucosa L.",
  "Fagopyrum esculentum Moench",
  "Fallopia baldschuanica (Regel) Holub",
  "Fallopia convolvulus (L.) √Å. L√∂ve",
  "Fallopia dumetorum (L.) Holub",
  "Fallopia japonica (Houtt.) Ronse Decr.",
  "Festuca arundinacea Schreber",
  "Festuca gigantea (L.) Vill.",
  "Festuca heteromalla Pourr.",
  "Festuca heterophylla Lam.",
  "Festuca pratensis Huds.",
  "Festuca rubra L.",
  "Festuca stricta Host",
  "Festuca valesiaca Schleich. ex Gaudin",
  "Ficus carica L.",
  "Filipendula vulgaris Moench",
  "Foeniculum vulgare Mill.",
  "Fragaria vesca L.",
  "Fragaria viridis Duchesne",
  "Frangula alnus Mill.",
  "Fraxinus excelsior L.",
  "Fraxinus ornus L.",
  "Fumana procumbens (Dunal) Gren. & Godr.",
  "Fumaria capreolata L.",
  "Fumaria officinalis L.",
  "Galanthus nivalis L.",
  "Galega officinalis L.",
  "Galeopsis angustifolia Hoffm.",
  "Galeopsis pubescens Besser",
  "Galeopsis tetrahit L.",
  "Galinsoga ciliata (Raf.) S.F. Blake",
  "Galinsoga parviflora Cav.",
  "Galium album Mill.",
  "Galium aparine L.",
  "Galium laevigatum L.",
  "Galium lucidum All.",
  "Galium mollugo L.",
  "Galium murale (L.) All.",
  "Galium odoratum (L.) Scop.",
  "Galium palustre L.",
  "Galium parisiense L.",
  "Galium rubrum L.",
  "Galium verum L.",
  "Genista germanica L.",
  "Genista tinctoria L.",
  "Geranium columbinum L.",
  "Geranium dissectum L.",
  "Geranium molle L.",
  "Geranium nodosum L.",
  "Geranium purpureum Vill.",
  "Geranium pusillum Burm. f.",
  "Geranium pyrenaicum Burm. f.",
  "Geranium robertianum L.",
  "Geranium rotundifolium L.",
  "Geranium sanguineum L.",
  "Geranium sibiricum L.",
  "Geum urbanum L.",
  "Gladiolus italicus Mill.",
  "Glechoma hederacea L.",
  "Gleditsia triacanthos L.",
  "Globularia bisnagarica L.",
  "Glyceria notata Chevall.",
  "Gymnocarpium dryopteris (L.) Newman",
  "Hedera helix L.",
  "Helianthemum nummularium (L.) Mill.",
  "Helianthus annuus L.",
  "Helianthus tuberosus L.",
  "Heliotropium europaeum L.",
  "Helleborus niger L.",
  "Helleborus viridis L.",
  "Helminthoteca echioides (L.) Holub",
  "Helosciadium nodiflorum (L.) W.D.J. Koch",
  "Hemerocallis fulva (L.) L.",
  "Hepatica nobilis Schreb.",
  "Heracleum sphondylium L.",
  "Hermodactylus tuberosus (L.) Mill.",
  "Herniaria hirsuta L.",
  "Hibiscus syriacus L.",
  "Hibiscus trionum L.",
  "Hieracium amplexicaule L.",
  "Hieracium bifidum L.",
  "Hieracium lactucella Wallr.",
  "Hieracium murorum L.",
  "Hieracium pilosella L.",
  "Hieracium piloselloides Vill.",
  "Hieracium tenuiflorum (Arv.-Touv.) Zahn",
  "Hippocrepis comosa L.",
  "Hippocrepis emerus (L.) Lassen",
  "Hirschfeldia incana (L.) Lagr.-Foss.",
  "Holcus lanatus L.",
  "Homalotrichon pubescens (Huds.) Banfi, Galasso & Bracchi",
  "Hordeum murinum L.",
  "Hordeum vulgare L.",
  "Humulus japonicus Siebold & Zucc.",
  "Humulus lupulus L.",
  "Hyacinthoides hispanica (Mill.) Rothm.",
  "Hylotelephium maximum (L.) Holub",
  "Hyoscyamus albus L.",
  "Hypericum androsaemum L.",
  "Hypericum montanum L.",
  "Hypericum perforatum L.",
  "Hypericum tetrapterum Fr.",
  "Hypochaeris radicata L.",
  "Ilex aquifolium L.",
  "Impatiens balfourii Hook. f.",
  "Impatiens parviflora DC.",
  "Inula conyzae (Griess.) Meikle",
  "Inula hirta L.",
  "Inula spiraeifolia L.",
  "Ipomoea purpurea (L.) Roth",
  "Iris (√ó) germanica L.",
  "Iris foetidissima L.",
  "Iris graminea L.",
  "Iris pseudacorus L.",
  "Jasminum officinale L.",
  "Juglans regia L.",
  "Juncus acutiflorus Ehrh. ex Hoffm.",
  "Juncus articulatus L.",
  "Juncus effusus L.",
  "Juncus inflexus L.",
  "Juncus tenuis Willd.",
  "Juniperus communis L.",
  "Kickxia elatine (L.) Dumort.",
  "Kickxia spuria (L.) Dumort.",
  "Knautia arvensis (L.) J.M. Coult.",
  "Knautia drymeia Heuff.",
  "Koeleria pyramidata (Lam.) P. Beauv.",
  "Laburnum anagyroides Medik.",
  "Lactuca muralis (L.) P. Gaertn.",
  "Lactuca saligna L.",
  "Lactuca serriola L.",
  "Lamium album L.",
  "Lamium amplexicaule L.",
  "Lamium flavidum F. Herm.",
  "Lamium maculatum L.",
  "Lamium purpureum L.",
  "Lapsana communis L.",
  "Lathyrus latifolius L.",
  "Lathyrus linifolius (Reichard) B√§ssler",
  "Lathyrus niger (L.) Bernh.",
  "Lathyrus pratensis L.",
  "Lathyrus sphaericus Retz.",
  "Lathyrus sylvestris L.",
  "Lathyrus vernus (L.) Bernh.",
  "Laurus nobilis L.",
  "Lavatera punctata All.",
  "Leersia oryzoides (L.) Sw.",
  "Legousia speculum-veneris (L.) Chaix",
  "Lemna minor L.",
  "Leontodon autumnalis L.",
  "Leontodon hispidus L.",
  "Lepidium campestre (L.) R. Br.",
  "Lepidium draba L.",
  "Lepidium graminifolium L.",
  "Lepidium sativum L.",
  "Lepidium virginicum L.",
  "Leucanthemum vulgare Lam.",
  "Leucojum vernum L.",
  "Ligustrum lucidum Aiton f.",
  "Ligustrum ovalifolium Hassk.",
  "Ligustrum sinense Lour.",
  "Ligustrum vulgare L.",
  "Linaria vulgaris Mill.",
  "Linum catharticum L.",
  "Linum trigynum L.",
  "Linum usitatissimum L.",
  "Liriodendron tulipifera L.",
  "Listera ovata (L.) R. Br. in W.T. Aiton",
  "Lobularia maritima (L.) Desv.",
  "Lolium multiflorum Lam.",
  "Lolium perenne L.",
  "Loncomelos pyrenaicus (L.) Hrouda ex Holub",
  "Lonicera caprifolium L.",
  "Lonicera japonica Thunb.",
  "Lonicera xylosteum L.",
  "Lotus corniculatus L.",
  "Lotus pedunculatus Cav.",
  "Lotus tenuis Waldst. & Kit. ex Willd.",
  "Lunaria annua L.",
  "Luzula campestris (L.) DC.",
  "Luzula multiflora (Ehrh.) Lej.",
  "Luzula nivea (L.) DC.",
  "Luzula pilosa (L.) Willd.",
  "Luzula sylvatica (Huds.) Gaudin",
  "Lychnis coronaria (L.) Clairv.",
  "Lychnis flos-cuculi L.",
  "Lycopus europaeus L.",
  "Lysimachia nummularia L.",
  "Lysimachia vulgaris L.",
  "Lythrum salicaria L.",
  "Mahonia aquifolium (Pursh) Nutt.",
  "Maianthemum bifolium (L.) F.W. Schmidt",
  "Malus domestica Borkh.",
  "Malus sylvestris (L.) Mill.",
  "Malva alcea L.",
  "Malva neglecta Wallr.",
  "Malva sylvestris L.",
  "Matricaria chamomilla L.",
  "Matricaria discoidea DC.",
  "Matteuccia struthiopteris (L.) Tod.",
  "Medicago arabica (L.) Huds.",
  "Medicago carstiensis Wulf. in Jacq.",
  "Medicago falcata L.",
  "Medicago lupulina L.",
  "Medicago minima (L.) L.",
  "Medicago sativa L.",
  "Melampyrum cristatum L.",
  "Melampyrum pratense L.",
  "Melica ciliata L.",
  "Melica nutans L.",
  "Melica uniflora Retz.",
  "Melilotus albus Medik.",
  "Melilotus officinalis (L.) Lam.",
  "Melissa officinalis L.",
  "Melittis melissophyllum L.",
  "Mentha aquatica L.",
  "Mentha arvensis L.",
  "Mentha longifolia subagg.",
  "Mentha spicata L.",
  "Mentha suaveolens Ehrh.",
  "Mercurialis annua L.",
  "Mercurialis perennis L.",
  "Mespilus germanica L.",
  "Minuartia hybrida (Vill.) Schischk.",
  "Mirabilis jalapa L.",
  "Misopates orontium (L.) Raf.",
  "Moehringia trinervia (L.) Clairv.",
  "Molinia arundinacea Schrank",
  "Morus alba L.",
  "Muhlenbergia schreberi C.C. Gmel.",
  "Muscari botryoides (L.) Mill.",
  "Muscari comosum (L.) Mill.",
  "Muscari neglectum Guss. ex Ten.",
  "Myagrum perfoliatum L.",
  "Myosotis arvensis (L.) Hill",
  "Myosotis discolor Pers.",
  "Myosotis ramosissima Rochel ex Schult.",
  "Myosotis sylvatica Ehrh. ex Hoffm.",
  "Narcissus pseudonarcissus L.",
  "Nasturtium officinale R. Br.",
  "Nigella damascena L.",
  "Odontites luteus (L.) Clairv.",
  "Oenothera chicaginensis De Vries & Cleland",
  "Omphalodes verna Moench",
  "Onobrychis arenaria (Kit.) DC.",
  "Onobrychis viciifolia Scop.",
  "Ononis natrix L.",
  "Ononis spinosa L.",
  "Ophiopogon japonicus (L. f.) Ker Gawl.",
  "Oplismenus hirtellus (L.) P. Beauv.",
  "Origanum vulgare L.",
  "Ornithogalum divergens Boreau",
  "Ornithogalum umbellatum L.",
  "Orobanche hederae Vaucher ex Duby",
  "Ostrya carpinifolia Scop.",
  "Oxalis acetosella L.",
  "Oxalis articulata Savigny",
  "Oxalis corniculata L.",
  "Oxalis debilis Kunth",
  "Oxalis dillenii Jacq.",
  "Oxalis purpurata Jacq.",
  "Oxalis stricta L.",
  "Panicum capillare L.",
  "Panicum dichotomiflorum Michx.",
  "Panicum miliaceum L.",
  "Papaver apulum Ten.",
  "Papaver dubium L.",
  "Papaver hybridum L.",
  "Papaver rhoeas L.",
  "Parietaria judaica L.",
  "Parietaria officinalis L.",
  "Parthenocissus quinquefolia agg.",
  "Parthenocissus tricuspidata (Siebold & Zucc.) Plan",
  "Paspalum dilatatum Poir.",
  "Paspalum distichum L.",
  "Pastinaca sativa L.",
  "Paulownia tomentosa (Thunb.) Steud.",
  "Persicaria hydropiper (L.) Spach",
  "Persicaria lapathifolia (L.) Delarbre",
  "Persicaria maculosa Gray",
  "Persicaria mitis (Schrank) Opiz ex Assenov",
  "Persicaria orientalis (L.) Spach",
  "Petasites albus (L.) Gaertn.",
  "Petasites fragrans (Vill.) C. Presl",
  "Petasites hybridus (L.) P. Gaertn., B. Mey. & Sche",
  "Petrorhagia prolifera (L.) P.W. Ball & Heywood",
  "Petrorhagia saxifraga (L.) Link",
  "Petroselinum crispum (Mill.) Fuss",
  "Peucedanum cervaria (L.) Lapeyr.",
  "Peucedanum oreoselinum (L.) Moench",
  "Peucedanum venetum (Spreng.) Koch",
  "Phacelia tanacetifolia Benth.",
  "Phalaris arundinacea L.",
  "Phalaris canariensis L.",
  "Phegopteris connectilis (Michx.) Watt",
  "Phleum pratense L.",
  "Phragmites australis (Cav.) Trin. ex Steud.",
  "Physalis alkekengi L.",
  "Physalis peruviana L.",
  "Phyteuma ovatum Honck.",
  "Phytolacca americana L.",
  "Picris hieracioides L.",
  "Pimpinella major (L.) Huds.",
  "Pimpinella saxifraga L.",
  "Piptatherum miliaceum (L.) Coss.",
  "Plantago lanceolata L.",
  "Plantago major L.",
  "Plantago media L.",
  "Plantago weldenii Rchb.",
  "Platanthera bifolia (L.) Rich.",
  "Platanus √óhispanica Mill. ex M√ºnchh.",
  "Poa angustifolia L.",
  "Poa annua L.",
  "Poa bulbosa L.",
  "Poa compressa L.",
  "Poa nemoralis L.",
  "Poa palustris L.",
  "Poa pratensis L.",
  "Poa trivialis L. (inc. P. sylvicola Guss.)",
  "Polycarpon tetraphyllum (L.) L.",
  "Polygala chamaebuxus L.",
  "Polygala nicaeensis Risso ex W.D.J. Koch",
  "Polygala vulgaris L.",
  "Polygonatum multiflorum (L.) All.",
  "Polygonum arenastrum Boreau",
  "Polygonum aviculare L.",
  "Polypodium vulgare L.",
  "Polypogon viridis (Gouan) Breistr.",
  "Polystichum aculeatum (L.) Roth",
  "Polystichum setiferum (Forssk.) T. Moore ex Woyn.",
  "Populus alba L.",
  "Populus nigra L.",
  "Populus tremula L.",
  "Portulaca grandiflora Hook.",
  "Portulaca oleracea L.",
  "Potamogeton crispus L.",
  "Potamogeton pusillus L.",
  "Potentilla alba L.",
  "Potentilla erecta (L.) Raeusch.",
  "Potentilla indica (Andrews) Th. Wolf",
  "Potentilla neumanniana Rchb.",
  "Potentilla recta L.",
  "Potentilla reptans L.",
  "Potentilla sterilis (L.) Garcke",
  "Prenanthes purpurea L.",
  "Primula vulgaris Huds.",
  "Prunella grandiflora (L.) Scholler",
  "Prunella laciniata (L.) L.",
  "Prunella vulgaris L.",
  "Prunus armeniaca L.",
  "Prunus avium L.",
  "Prunus cerasifera Ehrh.",
  "Prunus cerasus L.",
  "Prunus domestica L.",
  "Prunus laurocerasus L.",
  "Prunus persica (L.) Batsch",
  "Prunus spinosa L.",
  "Pseudofumaria lutea (L.) Borkh.",
  "Pteridium aquilinum (L.) Kuhn in Kerst.",
  "Pulicaria dysenterica (L.) Bernh.",
  "Pulmonaria australis (Murr) Sauer",
  "Pulmonaria officinalis L.",
  "Pyrus communis L.",
  "Pyrus pyraster (L.) Burgsd.",
  "Quercus cerris L.",
  "Quercus ilex L.",
  "Quercus petraea Liebl.",
  "Quercus pubescens Willd.",
  "Quercus robur L.",
  "Quercus rubra L.",
  "Ranunculus acris L.",
  "Ranunculus arvensis L.",
  "Ranunculus bulbosus L.",
  "Ranunculus ficaria L.",
  "Ranunculus nemorosus DC.",
  "Ranunculus parviflorus L.",
  "Ranunculus penicillatus (Dumort.) Babc.",
  "Ranunculus polyanthemophyllus W. Koch & Hess",
  "Ranunculus repens L.",
  "Ranunculus sardous Crantz",
  "Ranunculus trichophyllus Chaix",
  "Raphanus raphanistrum L.",
  "Raphanus sativus L.",
  "Rapistrum rugosum (L.) All.",
  "Reseda lutea L.",
  "Rhamnus cathartica L.",
  "Rhamnus saxatilis Jacq.",
  "Rhinanthus alectorolophus (Scop.) Pollich",
  "Rhus hirta (L.) Sudw.",
  "Robinia pseudacacia L.",
  "Rorippa austriaca (Crantz) Besser",
  "Rorippa palustris (L.) Besser",
  "Rorippa sylvestris (L.) Besser",
  "Rosa abietina Gren. ex H. Christ",
  "Rosa agrestis Savi",
  "Rosa arvensis Huds.",
  "Rosa canina L.",
  "Rosa corymbifera Borkh.",
  "Rosa gallica L.",
  "Rosa multiflora Thunb.",
  "Rosa tomentella L√©man",
  "Rostraria cristata (L.) Tzvelev",
  "Rubus caesius L.",
  "Rubus laciniatus Willd.",
  "Rubus praecox Bertol.",
  "Rubus sulcatus Vest ex Tratt.",
  "Rubus ulmifolius Schott",
  "Rumex acetosa L.",
  "Rumex acetosella L.",
  "Rumex conglomeratus Murray",
  "Rumex crispus L.",
  "Rumex obtusifolius L.",
  "Rumex pulcher L.",
  "Ruscus aculeatus L",
  "Ruta graveolens L.",
  "Sagina apetala Ard.",
  "Sagina procumbens L.",
  "Salix alba L",
  "Salix caprea L.",
  "Salix cinerea L.",
  "Salix eleagnos Scop.",
  "Salix purpurea L.",
  "Salvia glutinosa L.",
  "Salvia pratensis L.",
  "Salvia verbenaca L.",
  "Sambucus ebulus L.",
  "Sambucus nigra L.",
  "Sanguisorba minor Scop.",
  "Sanicula europaea L.",
  "Saponaria ocymoides L.",
  "Saponaria officinalis L.",
  "Satureja hortensis L.",
  "Saxifraga tridactylites L.",
  "Scabiosa triandra L.",
  "Scandix pecten-veneris L.",
  "Schoenoplectus lacustris (L.) Palla",
  "Scilla bifolia L.",
  "Scirpus sylvaticus L.",
  "Scrophularia canina L.",
  "Scrophularia nodosa L.",
  "Scrophularia umbrosa Dumort.",
  "Scutellaria galericulata L.",
  "Secale cereale L.",
  "Securigera varia (L.) Lassen",
  "Sedum acre L.",
  "Sedum album L.",
  "Sedum cepaea L.",
  "Sedum dasyphyllum L.",
  "Sedum rupestre L.",
  "Sedum sarmentosum Bunge",
  "Sedum sexangulare L. em. Grimm",
  "Sedum thartii H?bert",
  "Senecio erraticus Bertol.",
  "Senecio inaequidens DC.",
  "Senecio vulgaris L.",
  "Serratula tinctoria L.",
  "Setaria italica (L.) P. Beauv.",
  "Setaria pumila (Poir.) Roem. & Schult.",
  "Setaria verticillata (L.) P. Beauv.",
  "Setaria verticilliformis Dumort.",
  "Setaria viridis (L.) P. Beauv.",
  "Sherardia arvensis L.",
  "Sicyos angulatus L.",
  "Silene conica L.",
  "Silene dioica (L.) Clairv.",
  "Silene latifolia Poir.",
  "Silene nutans L.",
  "Silene vulgaris (Moench) Garcke",
  "Silybum marianum (L.) P. Gaertn.",
  "Sinapis alba L.",
  "Sinapis arvensis L.",
  "Sisymbrium loeselii L.",
  "Sisymbrium officinale (L.) Scop.",
  "Smyrnium olusatrum L.",
  "Solanum bonariense L.",
  "Solanum chenopodioides Lam.",
  "Solanum dulcamara L.",
  "Solanum lycopersicum L.",
  "Solanum nigrum L.",
  "Solanum villosum Mill.",
  "Solidago gigantea Aiton",
  "Solidago virgaurea L.",
  "Sonchus arvensis L.",
  "Sonchus asper (L.) Hill",
  "Sonchus oleraceus L.",
  "Sorbus aucuparia L.",
  "Sorghum halepense (L.) Pers.",
  "Sparganium erectum L.",
  "Spartium junceum L.",
  "Spergularia rubra (L.) J. Presl & C. Presl",
  "Spiraea japonica L. f.",
  "Sporobolus indicus (L.) R. Br.",
  "Sporobolus neglectus Nash",
  "Sporobolus vaginiflorus (Torr.) Wood",
  "Stachys annua (L.) L.",
  "Stachys palustris L.",
  "Stachys recta L.",
  "Stachys sylvatica L.",
  "Stellaria aquatica (L.) Scop.",
  "Stellaria graminea L.",
  "Stellaria media (L.) Vill.",
  "Stellaria neglecta Weihe",
  "Stellaria pallida (Dumort) Cr√©p.",
  "Succisa pratensis Moench",
  "Symphyotrichum novae-angliae (L.) Nesom",
  "Symphytum bulbosum K.F. Schimp.",
  "Symphytum officinale L.",
  "Symphytum tuberosum L.",
  "Tanacetum corymbosum (L.) Sch. Bip.",
  "Tanacetum parthenium (L.) Sch. Bip.",
  "Tanacetum vulgare L.",
  "Taraxacum laevigatum agg.",
  "Taraxacum officinale agg.",
  "Taxus baccata L.",
  "Teucrium chamaedrys L.",
  "Teucrium montanum L.",
  "Teucrium scorodonia L.",
  "Thalictrum aquilegiifolium L.",
  "Thalictrum lucidum L.",
  "Thalictrum minus L.",
  "Thesium bavarum Schrank",
  "Thlaspi alliaceum L.",
  "Thlaspi perfoliatum L.",
  "Thuja orientalis L.",
  "Thymus praecox Opiz",
  "Thymus pulegioides L. s.l.",
  "Thymus vulgaris L.",
  "Tilia cordata Mill.",
  "Tilia platyphyllos Scop.",
  "Torilis arvensis (Huds.) Link",
  "Torilis japonica (Houtt.) DC.",
  "Torilis nodosa (L.) Gaertn.",
  "Trachycarpus fortunei (Hook.) H.A. Wendl.",
  "Tragopogon dubius Scop.",
  "Tragopogon pratensis L.",
  "Tragus racemosus (L.) All.",
  "Tribulus terrestris L.",
  "Trifolium arvense L.",
  "Trifolium campestre Schreb.",
  "Trifolium dubium Sibth.",
  "Trifolium fragiferum L.",
  "Trifolium hybridum L.",
  "Trifolium medium L.",
  "Trifolium montanum L.",
  "Trifolium nigrescens Viv.",
  "Trifolium ochroleucum Huds.",
  "Trifolium patens Schreb.",
  "Trifolium pratense L.",
  "Trifolium repens L.",
  "Trifolium rubens L.",
  "Trifolium scabrum L.",
  "Trifolium suaveolens Willd.",
  "Tripleurospermum inodorum (L.) Sch. Bip.",
  "Trisetum flavescens (L.) P. Beauv.",
  "Triticum aestivum L.",
  "Tulipa clusiana DC.",
  "Tulipa sylvestris L.",
  "Tussilago farfara L.",
  "Typha angustifolia L.",
  "Typha latifolia L.",
  "Ulmus minor Mill.",
  "Urtica dioica L.",
  "Vaccinium myrtillus L.",
  "Valeriana dioica L.",
  "Valeriana officinalis L.",
  "Valerianella locusta (L.) Laterr.",
  "Verbascum blattaria L.",
  "Verbascum chaixii Vill.",
  "Verbascum nigrum L.",
  "Verbascum phlomoides L.",
  "Verbascum pulverulentum Vill.",
  "Verbascum thapsus L.",
  "Verbena officinalis L.",
  "Veronica anagallis-aquatica L.",
  "Veronica arvensis L.",
  "Veronica beccabunga L.",
  "Veronica chamaedrys L.",
  "Veronica cymbalaria Bodard",
  "Veronica filiformis Smith",
  "Veronica hederifolia L.",
  "Veronica officinalis L.",
  "Veronica peregrina L.",
  "Veronica persica Poir.",
  "Veronica polita Fr.",
  "Veronica prostrata L.",
  "Veronica serpyllifolia L.",
  "Veronica spicata L.",
  "Veronica urticifolia Jacq.",
  "Viburnum lantana L.",
  "Viburnum opulus L.",
  "Viburnum rhytidophyllum Hemsl.",
  "Viburnum tinus L.",
  "Vicia angustifolia L.",
  "Vicia cracca L.",
  "Vicia hirsuta (L.) A.Gray",
  "Vicia sativa L.",
  "Vicia sepium L.",
  "Vicia tenuifolia Roth",
  "Vicia tetrasperma (L.) Schreb.",
  "Vicia villosa Roth",
  "Vinca major L.",
  "Vinca minor L.",
  "Vincetoxicum hirundinaria Medik.",
  "Viscum album L.",
  "Viola alba Besser",
  "Viola arvensis Murray",
  "Viola cucullata Aiton",
  "Viola hirta L.",
  "Viola odorata L.",
  "Viola reichenbachiana Boreau",
  "Viola riviniana Rchb.",
  "Viola suavis M. Bieb.",
  "Viola tricolor L.",
  "Vitis labrusca L.",
  "Vitis vinifera L.",
  "Vulpia ciliata Dumort.",
  "Vulpia myuros (L.) C.C. Gmel.",
  "Xanthium italicum Moretti",
  "Zea mays L."
];
