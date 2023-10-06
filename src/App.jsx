import "./styles.css";
import { InputText } from "./components/InputText.jsx";
import { CheckBox } from "./components/CheckBox";
import { Radio } from "./components/Radio";

export default function App() {
  return (
    <>
      <h1 className="header1">内見チェックリスト</h1>
      <h2 className="header2">玄関、通路</h2>

      {
        <InputText
          text="ドアの大きさ、通路の幅"
          supplement="家具の搬入に影響あり"
        />
      }

      <h2 className="header2">コンセント、電話・テレビ・ネットの配線</h2>

      <InputText
        text="電気メーター"
        supplement="家電の場所をどこにするかイメージ、テレビ、光ケーブルの位置"
      />
      <CheckBox text="コンセントの場所と数" />

      <h2 className="header2">窓・扉・壁・床</h2>

      <Radio
        text="フローリングの種類"
        list={["フローリング", "クッションフローリング"]}
      />

      <Radio text="コンロの壁は不燃材？" list={["Yes", "No"]} />

      <Radio text="壁の素材は？" list={["クロス", "それ以外"]} />

      <Radio text="ドアの開け閉めはスムーズ？" list={["radio", "No"]} />

      <Radio text="納戸に穴は開いている？" list={["Yes", "No"]} />

      <Radio text="押し入れや窓のサッシはカビ臭い？" list={["Yes", "No"]} />

      <Radio text="床や天井にシミはある？" list={["Yes", "No"]} />

      <Radio text="ベランダ、バルコニーのサイズ" list={["Yes", "No"]} />

      <Radio text="外からの侵入経路はある？" list={["Yes", "No"]} />

      <Radio text="眺望の確認" list={["Yes", "No"]} />
    </>
  );
}
