function commonLongest(s1, s2, n, m, cache) {
    if (n < 0 || m < 0) {
        return 0;
    }
    if (cache[n][m] !== -1) return cache[n][m];

    if (s1[n] === s2[m])
        cache[n][m] = 1 + commonLongest(s1, s2, n - 1, m - 1, cache);
    else
        cache[n][m] = Math.max(commonLongest(s1, s2, n-1, m, cache), commonLongest(s1, s2, n, m-1, cache));

    return cache[n][m];
}

function commonChild(s1, s2) {
    let cache = [];
    for (let i = 0; i < s1.length; i++) {
        cache[i] = [];
        for (let j = 0; j < s2.length; j++){
            if (s1[i] === s2[j]) {
                if (i === 0 || j === 0) cache[i][j] = 1;
                else cache[i][j] = 1 + cache[i-1][j-1];
            }
            else {
                let max = 0;
                if (i > 0) {
                    max = cache[i - 1][j];
                }
                if (j > 0) {
                    let jm = cache[i][j-1];
                    if (jm > max) max = jm;
                }
                cache[i][j] = max;
            }
        }
    }


    return cache[s1.length - 1][s2.length - 1];

    //return commonLongest(s1, s2, s1.length - 1, s2.length - 1, cache);
}
console.log(
//commonChild("HARRY", "SALLY"),
//commonChild("AA", "BB"),
//commonChild("SHINCHAN", "NOHARAAA"),
//commonChild("ABCDEF", "FBDAMN"),

commonChild("UBBJXJGKLXGXTFBJYNLHQPULFILXLMPDQFWIYVBRSRFNETTEGXOHLBVOAJMHLZMTMPSJCPWJGHISUUIKDPPAWVQMZECIEIQUPLMFKENHVLKCJVDDSUPDOZXBZSRMWHLIHENULKFEXVCZIOVHRQHZWMDAYLDLGXSTMPDBGAMEBHOMOGGEBFRITAQVALWGINAOWMTRJLJHGEVJOPCVXZQVDBKOUPFJWHMRXULNNKRUUITTVIXYYSZDECBIBBIIWPDOEMFHDJKUSIFZNOTGIVDIJJVHPOGQHXWERMYNYGYOHJYGNOVFNWWERWMTBZOAXNHTCJIBOCUBXERSJORHOAMALOODYOHXIDEINMDWSNKUKFLMFHZLUIFOVDDSGPRJLUOLSFVNCVZUIWRFLKGCKPHGBWMXGNATTRKPOPYYMTHSRYHVXOGFDVRSKDVHHCTJIRAWOLDFDCRXROEVQXMDVOJSGHUPHDSGAJUFWLILUNCGSEPBIGBDNNAGCHBZHFWVUDPAQXLAXIPLSZWDLRQJOMILYKVJNMGBPARKUUTIHOAFIKIRWWUAZASRTOOYHPNHCANPDHGZEWHKAIBGDAAZLAYRWKRWUKBVTRAMLQKSRYVSRXRYVVBOUEGBMGXAZMTQMAJHKGQCRLAJORKHTVLPWFDOZFWHJXMMHNMQIJOBNALQQMPBHMIZCGRGQKOSTJHQXYXUOFKDYKHEISOYNVJSMLYSTEEBWSPFNWIYVBWEFGTUFRZZJGXSMUQGLKQNJPBLKDTXOZQEHXXGKHJZPUUOCWMXUNIBNTJCUFXRQWZGZSLYADLXFYOOPLJRLSYYYHQQUCFEAHNWZOMOUWAUYRFAWHDUPAOJHHPIWYLQRFXGRUCUOAMDNFVTTWTXREEUFCSXADRQKRLRTWYSOGJQSIQZQJHLFWOHTMTYETCJRBRVNYAWIOTXTVEVJMXSGDBESHKJMWQZLWBPSRQAIVURCOZJUXTKCDVJSTEEEXWZCHIFXCROXLHDDVGSFLRPNLRPNXFUUBATGIZJUUVUXMUWAZGKJBRRJAIVIACJTZICMLIKDJRMPVOHEQNAYZMNDMQFMAJNMQOZBXYIXTZDLUJAPISDFMILADTNCJMWSINHWZNGNJNWCRQBSFZAAQVOVQAHJTGFAQTYBEHMSWYGQOJTNJKVVBXZQHOCBOSSBKVRRVFGEXXRZEEOSTOLDFXEATRULHACAQXYAXDEXHFHHGOBXZNIBHEJMRLLNNHICIFTPCRWIPNCXYYRJRERNDVSZAOXIULLFQROQLUAZXDRSYGWOVNCLUBKKRNBEYKALCZDJCJMPFBQXIIMNOHYWEHYGWBRVGNZYVRHVIOSMCATCNDNHKJQVILGTTJIIYPYWECZWDHUGMYBGOAANHFHRUHHFSNXIPYDTEACTOWCUYEXZIOFVOYOYPRQQSBGCBQSFQMTHMCKADQWTMSPHSDYIMOHHWJADQFCRIZANPLWJDCXYXUKOXEMWVKHBISONBQJLODRNPRSSUMBIUKAINIRZEZSHKPTYYVXTGXCRXAULWYFDTRPWWIYDVGFVLNSLIAZHKLWCHVBUFJWINZWKZNVYJYKJYKJIBOBJRQGGVPADSKQHXPSZHXVAVIWQTXZBBDJMTVVFDMZMCWIPEAXLUJJECGMHETBGCJZWIAMKJPXDRYNYZDVYIXHFNOBGOPKUCXTUDFVZFAMWKBTHZDXQNUMFQRNZZNQPYBSWCFJDGOGBAVORCVMWPPRLOKGFCSUMMUBDHABUEYTGOPRLPYESPONOIQNMUQGBFGULJYRLESRQCYNXLOPTBTOZKPRABIYIUWRWIPWONTDPKNGMPHSEWHGNIIAVKUVIXIQZGPNSXCNPPLMIOXKMNUUIAUABOQMMYRJDVDAYAAYOXOWQAVGBMCMIZTVDGKQVXCWRUCCUHSHWXKLZIKJDKIZZBSMBGNYARWXMMKNIPMBKUKSYBVYLTHLIDEHXBHSNYVYJVINFOKPNQCAZIDRYAWTWODCYHUTVHDLBPAQIJJNDDEMVVADJXIJHHHJEVSCHPNJLAUGUPEZAZJEVTJQWCAUUZISUMSYJPRUBAOCAFMTUHXOWBPRAGKFYPLJUPHWHEEOOWKDXYHISNGQYJTADSPAGQMIVZQZLIZQGMMIOKMTKMCOHDZQRYGIKEJCKOBGHWUJZNNSDSSUPUDTPXNBBOKYZRFCORNYJEQXDXGDTIKQMKZNCANALAIPXFIDROXSCHDSPXUMHIHYRCETHUZQJHLCSNGEMBDDFPNONFMKDFXPYANYIYHSKMLYOJRQFOBWIGTEBZVLQDXNUDHZXNMESUJWWQSMZYRXTHXXCEAFUJVFHYYBEOJEVGBPHYMKWVHCCIARIBUISSSAPDIZRBRMSUBWYEKVUMGPJCBBOCDCLMCZBWBVYRQRREQPLHUNHMHTRGLXXXKZJBLJWYKEOJWIQEYBHWJCLQGHHLASDDMWAHFYZHCZJPXJWZQTDGKTOJRAHCTIDIVHRQUHSCMRDICYAAPQYZEQBMXUEPOTILSIJKEEOJXXFFXWDXBVZYTQJSAUAQKELWVTTQGXAHXJWBKBZWZVZADQSCHFQBMSXLCGNNGDMIPFWNKAVZIQLIHBMABUBXSGXXTREJZYBTFBAVIIKTDAIRPYWQZANPYLDJSHRZPMWIPZJPUQUTXJPKMRNOAYOHPFCVLINPOTRDAZWXZCJMDLHGOOLZTNQXMVPNOUZCDFEYATNLCODMOQLDSPYOAPQITRJLQYEBBTOEOHKJKCCETKIADLYLJOMWLGZSKPJQAPFJFOTPTRDCTUCHKTJMTVIFSCRCADLSGNNIUHXXHKOSTZEZMJRYIYCIWCZQPMJPFNBGGIRBTWQYDTVSKDNXDVVIFEJSKELBNQUGYDVKHOUMFGBABLJAYLZKASVYVLCJALPJCUGCULUCLCZIZUYNRPBOQJZHTCKIHEQYMTYLOHJLOEAKZBCGKAQRJSATNRZUSFOSEQXEEZCDBALXHUALTQVBBAWRFBIWKBESOYXPBZINJPUJIKHUJWTJLKHKKQWQTWZNLHSTHYUVINLTDXFNEFRFEGODSFWXGDWZHAVWRNROFTNYEVEBWKMZZURJKOHOHQTANWSMKBNGQOWQHGWWGWAQPNSFNFAKUJNEHRMBYJTWYXKQCWYVGLSEUZGBIFDCEJKVTUGCEKGOFGXDOPADDEZQSHPOWIDPMRCPEEIBBAIUJFVCGAFVSPOJSUPSRYAFBBPALHFKIBQKZEWNUTESHZCHPJHSQUCIEAKQXQWVNJKYHWCSKUEPDRSYGLYQDLFAHYCOCYOXCUKIDVVROCZFOCQCLIHYKOBQPTRAOPZFMOBQNZXHIPZFTDZJALTSKOYTEYAOAOCYEXBGRQYWUOEAVHQUXBPTMVDMIVOWWURCVCXJBSKGNKDMRKQCIYRYHQJTROFIGSITZACPYJDAYODNXWWIDMMNEQWEVLKJAHXERTAPWJHYDTVGSVXADZLUEEMPRSVRJCNAEOIAUJMCYYMKOSZFRXDSOKMXVXGGXSHZHJSPFKMNPBOBQRXFRGFTOGGCVNSWUTUQFVWQLRXMBRLIHOESBLCCINFAHGSAYJVDZOTGVAFDTCLAKQVQHRXPPWZHVOMUNCYWGCLBHXRCYOIZDHFWVRSGQHQQSXDHIGOTKUZAOZXPCROWQIZWBEDUJTYADZOMLAADXDOHDZJLNGXVENVCPWUPBZCWAWTIJKYTRUMITKRNHTFEUVDHVAGLXJCIQJCBTBTZGVHONTTMAMWRWFETPAKQJMDZPZLQPMEJICRKYBFPBHWLIOCXVDXQDEBHVLXOSYKYBSUAFHLOJQFNAUZGVVLMVINWBEJAGFJOTWFIDEIOXPZESJBZBXVCOYWTDDAILFJOKHJPVCALFABUJAHUEDMBPESMINFHTSSLJTQDTYREYQPNJYYDQBLBCUCEOYVGGZDMGGAVBOVPZHWCFMALQTQWMOEWUOJDYCCUFULJBHDDULAWCDXZTMAICBKRVXWXYTNUVNPLVZVIBKJEMKIXCDSVGDLNDXFMUNEOWSUWQCIYNPAEJCHGEUAKBXGCFGLJRFSTZHERMKGIQQYDYXMKUFESCWIQWKRBNYRASHYXUGYMRUZOGKZKNGQDWRXJUWAZBISCSLYBASSZUEHUVZIGHONWDSDVFTKUOECNMKYMWLLPNKYDINPKSLFYIBNERJIZUSELWCICKHZJVDBUIIXHGKRQGOGCSUIYVHWROOAPWMWMGBYWGBDSTFKXFUIWPJOBFEICKIJHHHLNVUDCEMLWEPKCANBMFGODZQRRXRIPKXBGYWAKOWIHFWWXCTZXJVCSHEXDZAXVQYDHMKTFTWVSZHPDPQFCBHYDT",
    "WZFPTGLCXKNHAKSFEIXYOHTDCCSDAKYASOBHHDTBEZXRKGKOJOLMEGTPSWQNRODAHQOYMOJDVGVSUSMDMLJLVQZYREJGKMKLXGBQEPYXVCTABIBGSWXFWXIIIKDAOXUWZLNYOWRWAUCQTACZPIZREJGTIBCACYDCGSAUULVWRCDLSMIAPCDPHJEOUPOLYPUDSEBYVIUMPLMGTFWCZKDZOHHSGRZDGGPXCUBINGTMOTEOHGLTPOUGCLLJJYFCJJATPZKJSVVKDBJOCJIUNGJJITGMBSYMJLMOCYEGTFECRMBFSBFLXCPSIOJZONIMPPKXETQEEYHUODXZCZJSGMRPFEIRUBUZMHSHRXNXKHMVEMFCSPQQGVEWOMJXSHDRBSPZTFFBAYKXSVULEHDYTDCWATCQCDDEUZINAXFLMWJLOPVWMAMSTMXKKOXSGLAWMGAIWTYWTPBWYEAKSWKSSDQTWVYDFHNTMLAGJBFUSVXUZCMSMDAUBPQOUYLIGVSWGVTASPISVRYGKCJTSKRXCMQOUVNMIIOMQZGZTGLUSRZXFVRLPKDSTTOTHEBQNJNCAICMFQRISSKYKTQWVLLGLLUCHDCKNXSWKGXHEVJGTLQFZJBAPYPUMYLQJPRJZCSRRPSTJQZGVFINHPRKVMHQUPUAAWVAGZIUMNXXGMWQAZXOFHPIHIMJCJMXVUMFSVYGXIIQOSFCRDXYIBHDAZFCJLQTYPVZUEWHCHABWOBSFZMSDHZUDPLRKWIHKJTJLUDZEGHRERGCEGXAWHXHPNEBANUYQVJDVGTFHOUPIVEHVLYZHELIWZPXLKMRLFIHTBBXPSCZZKFDYNHAHFBACRXGGLWLKZDCKPPHPYHLKVJQNXSZVXXBCREROFCITROSOSILHTCXPTNUETFSWJBNHMIIESTBUPFPRCODHDNHSWUEDBUQLYAPSJNHOVYMHXEOCUAHAMTXAFWRTPGMLIOVXDUKCFIVBRVXWTSJYHYTNGQGVPUEQPZAOLVGHDWBHBRHIFVZHAWZQDMNOUXTNJRPTIASYVQIJLBMMCRNYLHMBPIKGVDPPTGKZZNXXTYGNFKYNQKRCDBKHXYXMGJJQERHDUIGMBVNNDCECRCTAQEJRFKWEAZDJJBVSSGFLQYALBPKCPXUMIELWGRWWHLQLTKZFPKXWTMMIYHLOSZOGELNGJEHTIQKJXLKIUOCVWOZEXMWQMSVEAHQQMYHGIBMSQUPEZNDRJGPGGEYVSHEMAYEEDAMLGUUCOKTMKFJVQMKOWXOLEUCYMSTLWROBVFSIFFELMDPXRFRZMVXTSMBONXRSYSLKDLMTCCATCPNLQUTMIODOVTEBFFJVRXLRHJZLWFOJMQAPTTBOQPBQIUWRBHIVHKCELSUUVYKOHVIPHUGBLFZFEECTYORMHBFQMNDNYJANEAHZEGAGNHZOUYEVLAXJXLKYQKSSMITMPYUHTYXRSXTXYLMFYVXDMJFJCAXUFKJLNRDLERJAPAERTYJJFAUFPKYCILLMPDWKZYPWGHYIUCEDRYAAUAQXSPZMYVPGBJYBABGELVTBRFCMCBRQZIWTFOGMRTWZLTMFKPKJEIXTCQUHBIRIRUZBIRBLQDWDEVQBMNFFHJYVIFATHAZBWKVDPDCAVBQOJUUSBHKKNUVNMXSDDXOAWZWUDFLPBJEDAHLYCHTYXHEFQIJABDKILJYPWLHRXUZYFAJGSREEKIXHKTBLZBYFSJSHJVTNWZZIGJHZHSFWZHLEMBHOYFLQOUPJKLZCOUTAVAJWOTTWNFRZJRTZWUTOGNFTWQXJKRFIEZBEQLVCCHVKMOUOFWNPKAIISJHCZVMBQFBOYVWKAMMSZJTYLUXTOVDUNXKADHSTMFBDRGAIULKUOXIFWHJDXLCSFBIMJGELSAGXEALCLIUVCHESOHYLLJPDKYJICTLFTUAYLJUXZQRVHYGBFEDKEJSXLGBRZFEWDZUWTYRYRRVCZJBWEATAGHSHMABGFBQVXODNHJCGMSYKJETETHKZPJHCTMIGUDRMOKCSBKCQQYOTYHGOYJVAIFYCBKZDVXHSHRSFNIMZNBJLLBNKFXSRXPCOXJBYYEWYCAVCQSJYWGBEXWZIXNLGMNEZTVWSMAPWXHKVCXUCIQOBFDNSJKTMLGRGMHMRSYRZEWSUKKVAGTXWDSFHXTHBCBCQLVTQOPGHXKOZCPCQOGFADJTNNHTMCPPWKRCFFPAPPVQFZSUUHPIZCKOYFZNKSJKNLHFOBWPAZYTOJLRYHTNDLXGWDLMYHUOVBQQZARLKZGCJXHSQMFHJWIUYHNBSHHCOPCMXZLLDCFGLKCGXTYTWLOWNGGBEOZECGZCTMVRMKMWYSHAAACPEILLEPOKDJZKGHCUZKWFBPDGRGBXYUCAEMESCABKAETFXHLFGSDFCDEPRIZVJNWPOCNBALVTJXZQHJFRWLVAVPMRFLZVJAFRZJKUKYJTJRSFXCLMINWSSUFWGZNUNZWLVLZJRIXVWYDDNXCVVZHCTPFTPLEOGAWXLLAAEQUWVJLZKYSXNDOTDJUMSDCABLVCKYWYLGBZGLXEWHRFBOJAIGCDWITRGFDUYFCNEXOKFCRJWRFUUKABRXDXIKBFWQVKIXFEEWUVFTNLKJSXNGNMFQDBSFGPYLBMUVKSMORJWGKGQFGASYIZENJITLEEJGNTTLVABVGSBYOQZJQBOOEEVRHVJHYEXIDYJKWUCNSDDSNTTOIBKDAECIXNYKPJNNGDTXJUBDCNYUUMJPSACOYPZXJCTHULSHQLOAJSQNVNOYGSHRFXYSWXIIJMKPTTLCKUVDWTLITJEJPTQQXAFZHMPCKCNKADEGFBSMMCYSQDFEDQLPUAPPAOAIAHVPIRFWIMTBUZVFNCOBQHIOUJADJQJGHTKLADBXUNTPJEVELRPZXEKXPCHTRKVHBNRJNXAXFHQNRPQZJKGBBJENGTAXGBOUCNEKGOAIKLXEAABOWLXRKPAJBSNVFGOOWOWPNYMKCWQNYRRBYVDXTGRELHZHRWXNKCOYXFCGAMXVZWGWEHQZXNLSENXXURQHXGJFVJMGNPUAJZQEWZWXPYROYCVPLRFBCMDRKXZVEFYWGSVLQAFABEPSOOFOLUBQSYXFDRMWNWWYKMGPWHCYNGAEFBDTKPZXZBMOCTSSAUVLIOVYXVUBPKWOYMEDFDSGGJYVSKLQUGCYSIUCGTBYNPMLSMTMEEIZUDHFQVXSLPEQDLWQFJUNPFAKVDRHJSYDJZFLHIRECPPZZFUGVGAJJXPXVECCLHJGTYITISTNHQGCMFWMDJILIIRHJOOUCMFXVWXNSOJTJHDCRDUNDHQWRTRCECBUALWWMWIQDQBCPFAUSRNNWLBLXSYXAQMEVEOEILOHVEZHNUXVATZVXIBXLTVCVTDYFPZGAJGSMVDHHDWJZAGSRCQHGSZAZDQRVARLPYCTAIEKGHDHXPQTTWGQSCVGOLAUQPLTCVNKANFOSTJIYFPRZXHFZSWYCMDADPYGMTZXICKQGQBNMMHETBDBCCUGYILYVHXVDJVZGLXJNCFUDUDWKKCBBWWFYAAJXAUSVUDPHMPTKHORGLRSBXFPDNMQMJSYCMZMXGQWNPXRWZJEAXRXMJVKVMLYWKMHWPPROVLNBTFXMGLSRNPPWZKHMUORZURRSCFNLUOFAJJVOEZWXOZZBMCKGWWCCXPIUNUPSMYSDSKKYJXFMDVAHODUXEHDNAVZALDXZMKEBBTFLRANQHDCUSXBCNTSLVOHOOUIPJFASOCGOGCMTEVOLRCLOSASVQPTDMQQGAXNSHOTPJMETQCJWXLKQATYGZMHRMROBLDWEOAQPVPNPHUJYSXLPFBRCFJKWZLFYAUQIRVRRBIBXMEHMRDFUKXUTYWMKKVAYFTKGGXOMLNDLEVBMECEKOYSISHGRANUDISOXFELKXCSZARTZAVLJXUZISWMSLKDRBDHBEKGYYYZZJKBSQLBRUXPSDMJFCZSLLYGXTBHYCCKAUUKLUASWFYYPYXYQMHEHIXJVQIHBLABNHINYLVUWZGUXVNQWNVPHGZEHVQCCFNTKEPVABVBXHKEIHHYAJTVBCAUGPWJBQIDEIHFKVLTHEBOMPAYSQMMAVCFCXTRUMIMRZLNAJNRWKRLDTGNLDEACNVOJYUZTCXREGPLPKXFEWPOCESGDPYRJYYZSPWTPALTNZMYAVZDBIAVWKWVBWRPLRSWDHOAWAEIFLXVCTWQXAJHTNYBOBXQGWAICLFLMEICSYMDSKSTJQLTQHELYJTUDUQLNCCVHTSXBWSGGGJXQPPZVUYMYOFSQGSFLMQNWERJORSTYZYJVVKTSDBILTGYMBGAECEOWSAZSHLHWDRAHNEGYEKBR"),

);