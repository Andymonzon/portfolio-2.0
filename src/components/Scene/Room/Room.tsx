import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Outlines } from "@react-three/drei";
import { SpotLight } from "three";
import { useFrame } from "@react-three/fiber";
import { MeshstandardMaterial } from "three";
import { ModelOutline } from "./ModelOutline/ModelOutline";
import { useContextAction } from "../../../hooks/useContextAction";

interface Props {
  lightLampRef: React.RefObject<SpotLight | null>;
}

export const Room = ({ lightLampRef, ...props }: Props) => {
  const { dispatchIsPlaying, refGlobalMusic } = useContextAction();

  const [objectSelected, setObjectSelected] = useState<string>("");

  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF(
    "/model/cuartoPortfolio.glb"
  );
  const { actions } = useAnimations(animations, group);

  const lampRef = useRef<MeshstandardMaterial>(null);

  useFrame(() => {
    actions["mob_huevoAction"]?.play();
  });

  useEffect(() => {
    if (lampRef.current && lightLampRef.current) {
      lampRef.current.add(lightLampRef.current);
      lampRef.current.add(lightLampRef.current.target);
    }
  }, [lightLampRef]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="zoro">
          <group name="root001">
            <group name="GLTF_SceneRootNode001">
              <group name="Arete1001_243">
                <mesh
                  name="Object_491"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_491.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Arete1_240">
                <mesh
                  name="Object_485"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_485.geometry}
                  material={materials.Aretes}
                />
              </group>
              <group name="Arete2_241">
                <mesh
                  name="Object_487"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_487.geometry}
                  material={materials.Aretes}
                />
              </group>
              <group name="Arete3_242">
                <mesh
                  name="Object_489"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_489.geometry}
                  material={materials.Aretes}
                />
              </group>
              <group name="Brazo_bot_left_17">
                <group name="Brazo_bot_left_O__16">
                  <mesh
                    name="Object_38"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Brazo_bot_right_19">
                <group name="Brazo_bot_right_O__18">
                  <mesh
                    name="Object_42"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_42.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Brazo_top_left_21">
                <group name="Brazo_top_left_O__20">
                  <mesh
                    name="Object_46"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_46.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Brazo_top_right_15">
                <group name="Brazo_top_right_O__14">
                  <mesh
                    name="Object_34"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Cabeza_O__11">
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Cabeza_10">
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Piel_0}
                />
              </group>
              <group name="Faja_4">
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Polera}
                />
              </group>
              <group name="FajaO__9">
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Outline_faja}
                />
              </group>
              <group name="Hombros_13">
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Hombtros_O_23">
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Mano_left_O__3">
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Mano_left_2">
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Mano_right_1">
                <group name="Mano_right_O__0">
                  <mesh
                    name="Object_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Outline}
                  />
                </group>
                <mesh
                  name="Object_4003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4003.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Orejas_O__25">
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Orejas_24">
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Pantalones_O__7">
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Outline_pantalones}
                />
              </group>
              <group name="Pantalones_5">
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Polera}
                />
              </group>
              <group name="Patillas_26">
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.Pelo}
                />
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.Outline_pelo}
                />
              </group>
              <group name="Plane002_28">
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane003_223">
                <mesh
                  name="Object_451"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_451.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane004_224">
                <mesh
                  name="Object_453"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_453.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane005_29">
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane006_30">
                <mesh
                  name="Object_65"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane007_225">
                <mesh
                  name="Object_455"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_455.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane008_226">
                <mesh
                  name="Object_457"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_457.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane009_227">
                <mesh
                  name="Object_459"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_459.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane010_31">
                <mesh
                  name="Object_67"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane011_32">
                <mesh
                  name="Object_69"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane012_33">
                <mesh
                  name="Object_71"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane013_34">
                <mesh
                  name="Object_73"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_73.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane014_228">
                <mesh
                  name="Object_461"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_461.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane015_35">
                <mesh
                  name="Object_75"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane016_229">
                <mesh
                  name="Object_463"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_463.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane017_230">
                <mesh
                  name="Object_465"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_465.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane018_231">
                <mesh
                  name="Object_467"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_467.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane019_232">
                <mesh
                  name="Object_469"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_469.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane020_233">
                <mesh
                  name="Object_471"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_471.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane021_234">
                <mesh
                  name="Object_473"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_473.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane022_235">
                <mesh
                  name="Object_475"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_475.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane023_36">
                <mesh
                  name="Object_77"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane024_37">
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane025_38">
                <mesh
                  name="Object_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane026_39">
                <mesh
                  name="Object_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane027_40">
                <mesh
                  name="Object_85"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane028_41">
                <mesh
                  name="Object_87"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane029_42">
                <mesh
                  name="Object_89"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane030_43">
                <mesh
                  name="Object_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane031_44">
                <mesh
                  name="Object_93"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane032_45">
                <mesh
                  name="Object_95"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane033_46">
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane034_47">
                <mesh
                  name="Object_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane035_48">
                <mesh
                  name="Object_101"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane036_49">
                <mesh
                  name="Object_103"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_103.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane037_50">
                <mesh
                  name="Object_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_105.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane038_51">
                <mesh
                  name="Object_107"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_107.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane039_52">
                <mesh
                  name="Object_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane040_236">
                <mesh
                  name="Object_477"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_477.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane041_53">
                <mesh
                  name="Object_111"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_111.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane042_237">
                <mesh
                  name="Object_479"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_479.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane043_238">
                <mesh
                  name="Object_481"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_481.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane045_239">
                <mesh
                  name="Object_483"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_483.geometry}
                  material={materials.Outline_pelo}
                />
              </group>
              <group name="Plane059_54">
                <mesh
                  name="Object_113"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane060_55">
                <mesh
                  name="Object_115"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_115.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane061_56">
                <mesh
                  name="Object_117"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_117.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane063_57">
                <mesh
                  name="Object_119"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane064_58">
                <mesh
                  name="Object_121"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_121.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane068_59">
                <mesh
                  name="Object_123"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane069_60">
                <mesh
                  name="Object_125"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_125.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane085_61">
                <mesh
                  name="Object_127"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane086_62">
                <mesh
                  name="Object_129"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane091_63">
                <mesh
                  name="Object_131"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane092_64">
                <mesh
                  name="Object_133"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_133.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane093_65">
                <mesh
                  name="Object_135"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_135.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane094_66">
                <mesh
                  name="Object_137"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane095_67">
                <mesh
                  name="Object_139"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_139.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane096_68">
                <mesh
                  name="Object_141"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_141.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane097_69">
                <mesh
                  name="Object_143"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_143.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane098_70">
                <mesh
                  name="Object_145"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_145.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane099_71">
                <mesh
                  name="Object_147"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_147.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane100_72">
                <mesh
                  name="Object_149"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_149.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane101_73">
                <mesh
                  name="Object_151"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_151.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane102_74">
                <mesh
                  name="Object_153"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_153.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane103_75">
                <mesh
                  name="Object_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_155.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane104_76">
                <mesh
                  name="Object_157"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_157.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane105_77">
                <mesh
                  name="Object_159"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_159.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane106_78">
                <mesh
                  name="Object_161"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_161.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane107_79">
                <mesh
                  name="Object_163"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_163.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane108_80">
                <mesh
                  name="Object_165"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_165.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane109_81">
                <mesh
                  name="Object_167"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_167.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane110_82">
                <mesh
                  name="Object_169"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_169.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane115_83">
                <mesh
                  name="Object_171"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_171.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane123_84">
                <mesh
                  name="Object_173"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_173.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane124_85">
                <mesh
                  name="Object_175"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_175.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane125_86">
                <mesh
                  name="Object_177"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_177.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane126_87">
                <mesh
                  name="Object_179"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_179.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane127_88">
                <mesh
                  name="Object_181"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_181.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane128_89">
                <mesh
                  name="Object_183"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_183.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane129_90">
                <mesh
                  name="Object_185"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_185.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane130_91">
                <mesh
                  name="Object_187"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_187.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane131_92">
                <mesh
                  name="Object_189"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_189.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane132_93">
                <mesh
                  name="Object_191"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_191.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane133_94">
                <mesh
                  name="Object_193"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_193.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane134_95">
                <mesh
                  name="Object_195"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_195.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane135_96">
                <mesh
                  name="Object_197"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_197.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane136_97">
                <mesh
                  name="Object_199"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_199.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane137_98">
                <mesh
                  name="Object_201"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_201.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane138_99">
                <mesh
                  name="Object_203"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_203.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane139_100">
                <mesh
                  name="Object_205"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_205.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane140_101">
                <mesh
                  name="Object_207"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_207.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane141_102">
                <mesh
                  name="Object_209"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_209.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane142_103">
                <mesh
                  name="Object_211"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_211.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane143_104">
                <mesh
                  name="Object_213"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_213.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane144_105">
                <mesh
                  name="Object_215"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_215.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane145_106">
                <mesh
                  name="Object_217"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_217.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane146_107">
                <mesh
                  name="Object_219"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_219.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane147_108">
                <mesh
                  name="Object_221"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_221.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane148_109">
                <mesh
                  name="Object_223"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_223.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane149_110">
                <mesh
                  name="Object_225"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_225.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane150_111">
                <mesh
                  name="Object_227"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane151_112">
                <mesh
                  name="Object_229"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_229.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane152_113">
                <mesh
                  name="Object_231"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_231.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane153_114">
                <mesh
                  name="Object_233"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_233.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane154_115">
                <mesh
                  name="Object_235"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_235.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane155_116">
                <mesh
                  name="Object_237"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_237.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane156_117">
                <mesh
                  name="Object_239"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_239.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane157_118">
                <mesh
                  name="Object_241"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_241.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane158_119">
                <mesh
                  name="Object_243"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_243.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane159_120">
                <mesh
                  name="Object_245"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_245.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane160_121">
                <mesh
                  name="Object_247"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_247.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane161_122">
                <mesh
                  name="Object_249"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_249.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane162_123">
                <mesh
                  name="Object_251"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_251.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane163_124">
                <mesh
                  name="Object_253"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_253.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane164_125">
                <mesh
                  name="Object_255"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_255.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane165_126">
                <mesh
                  name="Object_257"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_257.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane166_127">
                <mesh
                  name="Object_259"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_259.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane167_128">
                <mesh
                  name="Object_261"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_261.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane168_129">
                <mesh
                  name="Object_263"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_263.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane169_130">
                <mesh
                  name="Object_265"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_265.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane170_131">
                <mesh
                  name="Object_267"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_267.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane171_132">
                <mesh
                  name="Object_269"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_269.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane172_133">
                <mesh
                  name="Object_271"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_271.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane173_134">
                <mesh
                  name="Object_273"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_273.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane174_135">
                <mesh
                  name="Object_275"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_275.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane175_136">
                <mesh
                  name="Object_277"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_277.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane176_137">
                <mesh
                  name="Object_279"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_279.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane177_138">
                <mesh
                  name="Object_281"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_281.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane178_139">
                <mesh
                  name="Object_283"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_283.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane179_140">
                <mesh
                  name="Object_285"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_285.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane180_141">
                <mesh
                  name="Object_287"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_287.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane181_142">
                <mesh
                  name="Object_289"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_289.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane182_143">
                <mesh
                  name="Object_291"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_291.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane183_144">
                <mesh
                  name="Object_293"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_293.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane184_145">
                <mesh
                  name="Object_295"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_295.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane185_146">
                <mesh
                  name="Object_297"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_297.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane186_147">
                <mesh
                  name="Object_299"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_299.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane187_148">
                <mesh
                  name="Object_301"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_301.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane188_149">
                <mesh
                  name="Object_303"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_303.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane189_150">
                <mesh
                  name="Object_305"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_305.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane190_151">
                <mesh
                  name="Object_307"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_307.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane191_152">
                <mesh
                  name="Object_309"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_309.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane192_153">
                <mesh
                  name="Object_311"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_311.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane193_154">
                <mesh
                  name="Object_313"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_313.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane194_155">
                <mesh
                  name="Object_315"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_315.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane195_156">
                <mesh
                  name="Object_317"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_317.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane196_157">
                <mesh
                  name="Object_319"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_319.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane197_158">
                <mesh
                  name="Object_321"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_321.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane198_159">
                <mesh
                  name="Object_323"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_323.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane199_160">
                <mesh
                  name="Object_325"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_325.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane200_161">
                <mesh
                  name="Object_327"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_327.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane201_162">
                <mesh
                  name="Object_329"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_329.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane202_163">
                <mesh
                  name="Object_331"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_331.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane203_164">
                <mesh
                  name="Object_333"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_333.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane204_165">
                <mesh
                  name="Object_335"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_335.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane205_166">
                <mesh
                  name="Object_337"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_337.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane206_167">
                <mesh
                  name="Object_339"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_339.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane207_168">
                <mesh
                  name="Object_341"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_341.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane208_169">
                <mesh
                  name="Object_343"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_343.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane209_170">
                <mesh
                  name="Object_345"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_345.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane210_171">
                <mesh
                  name="Object_347"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_347.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane211_172">
                <mesh
                  name="Object_349"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_349.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane212_173">
                <mesh
                  name="Object_351"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_351.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane213_174">
                <mesh
                  name="Object_353"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_353.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane214_175">
                <mesh
                  name="Object_355"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_355.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane215_176">
                <mesh
                  name="Object_357"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_357.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane216_177">
                <mesh
                  name="Object_359"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_359.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane217_178">
                <mesh
                  name="Object_361"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_361.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane218_179">
                <mesh
                  name="Object_363"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_363.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane219_180">
                <mesh
                  name="Object_365"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_365.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane220_181">
                <mesh
                  name="Object_367"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_367.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane221_182">
                <mesh
                  name="Object_369"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_369.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane222_183">
                <mesh
                  name="Object_371"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_371.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane223_184">
                <mesh
                  name="Object_373"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_373.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane224_185">
                <mesh
                  name="Object_375"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_375.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane225_186">
                <mesh
                  name="Object_377"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_377.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane226_187">
                <mesh
                  name="Object_379"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_379.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane227_188">
                <mesh
                  name="Object_381"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_381.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane228_189">
                <mesh
                  name="Object_383"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_383.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane229_190">
                <mesh
                  name="Object_385"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_385.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane230_191">
                <mesh
                  name="Object_387"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_387.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane231_192">
                <mesh
                  name="Object_389"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_389.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane232_193">
                <mesh
                  name="Object_391"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_391.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane233_194">
                <mesh
                  name="Object_393"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_393.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane234_195">
                <mesh
                  name="Object_395"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_395.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane235_196">
                <mesh
                  name="Object_397"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_397.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane236_197">
                <mesh
                  name="Object_399"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_399.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane237_198">
                <mesh
                  name="Object_401"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_401.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane238_199">
                <mesh
                  name="Object_403"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_403.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane239_200">
                <mesh
                  name="Object_405"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_405.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane240_201">
                <mesh
                  name="Object_407"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_407.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane241_202">
                <mesh
                  name="Object_409"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_409.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane242_203">
                <mesh
                  name="Object_411"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_411.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane243_204">
                <mesh
                  name="Object_413"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_413.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane244_205">
                <mesh
                  name="Object_415"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_415.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane245_206">
                <mesh
                  name="Object_417"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_417.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane246_207">
                <mesh
                  name="Object_419"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_419.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane247_208">
                <mesh
                  name="Object_421"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_421.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane248_209">
                <mesh
                  name="Object_423"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_423.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane249_210">
                <mesh
                  name="Object_425"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_425.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane250_211">
                <mesh
                  name="Object_427"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_427.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane251_212">
                <mesh
                  name="Object_429"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_429.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane254_213">
                <mesh
                  name="Object_431"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_431.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane255_214">
                <mesh
                  name="Object_433"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_433.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane256_215">
                <mesh
                  name="Object_435"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_435.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane257_216">
                <mesh
                  name="Object_437"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_437.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane258_217">
                <mesh
                  name="Object_439"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_439.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane259_218">
                <mesh
                  name="Object_441"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_441.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane261_219">
                <mesh
                  name="Object_443"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_443.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane264_220">
                <mesh
                  name="Object_445"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_445.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane265_221">
                <mesh
                  name="Object_447"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_447.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane266_222">
                <mesh
                  name="Object_449"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_449.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Plane_27">
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials.Pelo_0}
                />
              </group>
              <group name="Polera_O__245">
                <mesh
                  name="Object_495"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_495.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Polera_244">
                <mesh
                  name="Object_493"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_493.geometry}
                  material={materials.Polera}
                />
              </group>
              <group name="Torso_O__22">
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Torso_12">
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.Piel}
                />
              </group>
              <group name="Zapatos_O__8">
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Outline_pantalones}
                />
              </group>
              <group name="Zapatos_6">
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Zapatos}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="sombrero">
          <group name="root004">
            <group name="GLTF_SceneRootNode004">
              <group name="hat_luffy_0">
                <mesh
                  name="Object_4006"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4006.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_5002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5002.geometry}
                  material={materials.line}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="luffy">
          <group name="root005">
            <group name="GLTF_SceneRootNode005">
              <group name="_0">
                <mesh
                  name="Object_4007"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4007.geometry}
                  material={materials.default_tex0}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="parlante">
          <group name="29b256d4dadd4d4f9ba3b983510f3b85objcleanermaterialmergergle">
            <mesh
              name="parlante3d"
              onClick={(e) => {
                e.stopPropagation();
                refGlobalMusic.current = true;
                dispatchIsPlaying({ type: "STOP" });
              }}
              castShadow
              receiveShadow
              geometry={nodes.Object_2002.geometry}
              material={materials.None}
              onPointerOver={() => setObjectSelected("parlante3d")}
              onPointerOut={() => setObjectSelected("")}
            >
              <ModelOutline
                objectSelected={objectSelected}
                currentId={"parlante3d"}
              />
            </mesh>
          </group>
        </group>
        <group name="barbablanca">
          <group name="One_Piece_-_WhiteBeardobjcleanermaterialmergergles">
            <mesh
              name="Object_2009"
              castShadow
              receiveShadow
              geometry={nodes.Object_2009.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              name="Object_3001"
              castShadow
              receiveShadow
              geometry={nodes.Object_3001.geometry}
              material={materials["edward001_cloak_d.001"]}
            />
          </group>
        </group>
        <group name="caja">
          <group name="CardboardBox_LPfbx">
            <group name="RootNode004">
              <group name="CardboardBox_LP">
                <mesh
                  name="CardboardBox_LP_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.CardboardBox_LP_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="mochila">
          <group name="Bag_r_lowfbx">
            <group name="RootNode005">
              <group name="bag_r_low">
                <mesh
                  name="bag_r_low_main_bag_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.bag_r_low_main_bag_0.geometry}
                  material={materials.main_bag}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="play">
          <group name="055125391edc4959bca1c2f43e8df120fbx">
            <group name="RootNode006">
              <group name="Box001">
                <mesh
                  name="Box001_Material005_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Box001_Material005_0.geometry}
                  material={materials["Material.014"]}
                />
              </group>
              <group name="Handle001">
                <mesh
                  name="Handle001_Material003_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Handle001_Material003_0.geometry}
                  material={materials["Material.015"]}
                />
              </group>
            </group>
          </group>
        </group>

        <group name="gabinete">
          <group name="root006">
            <group name="GLTF_SceneRootNode006">
              <group name="Cube_0001">
                <mesh
                  name="Object_4009"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4009.geometry}
                  material={materials.Frente}
                />
                <mesh
                  name="Object_5003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5003.geometry}
                  material={materials["material.001"]}
                />
                <mesh
                  name="Object_6002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6002.geometry}
                  material={materials.Tras}
                />
              </group>
            </group>
          </group>
        </group>

        <group name="cafe" position={[-1.04, 0, 0]}>
          <group name="root007">
            <group name="GLTF_SceneRootNode007">
              <group name="Cylinder001_1">
                <mesh
                  name="Object_6003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6003.geometry}
                  material={materials["Material.016"]}
                />
              </group>
              <group name="Cylinder002_2">
                <mesh
                  name="Object_8002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8002.geometry}
                  material={materials["Material.017"]}
                />
              </group>
              <group name="Cylinder_0001">
                <mesh
                  name="Object_4010"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4010.geometry}
                  material={materials["material.002"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="ventana">
          <group name="0c4c5861ad2a4757a4ba60ad556421ccfbx">
            <group name="RootNode007">
              <group name="Plane001">
                <mesh
                  name="Plane001_Material043_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001_Material043_0.geometry}
                  material={materials["Material.043"]}
                />
              </group>
              <group name="Plane002">
                <mesh
                  name="Plane002_Material064_0"
                  receiveShadow
                  geometry={nodes.Plane002_Material064_0.geometry}
                  material={materials["Material.064"]}
                />
              </group>
              <group name="Plane058">
                <mesh
                  name="Plane058_Material042_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane058_Material042_0.geometry}
                  material={materials["Material.042"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="tacho">
          <group name="Wireframe_Trash_Binobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.metal}
            />
            <mesh
              name="Object_3002"
              castShadow
              receiveShadow
              geometry={nodes.Object_3002.geometry}
              material={materials.metal}
            />
          </group>
        </group>
        <mesh
          name="maceta"
          castShadow
          receiveShadow
          geometry={nodes.maceta.geometry}
          material={materials.Pot_Albedo}
        />
        <mesh
          name="maceta_planta"
          castShadow
          receiveShadow
          geometry={nodes.maceta_planta.geometry}
          material={materials.Plant_Albedo}
        />
        <group name="mueble">
          <group name="tableobjcleanermaterialmergergles">
            <mesh
              name="Object_2011"
              castShadow
              receiveShadow
              geometry={nodes.Object_2011.geometry}
              material={materials.blinn1SG}
            />
            <mesh
              name="Object_3004"
              castShadow
              receiveShadow
              geometry={nodes.Object_3004.geometry}
              material={materials.blinn2SG}
            />
            <mesh
              name="Object_4013"
              castShadow
              receiveShadow
              geometry={nodes.Object_4013.geometry}
              material={materials.blinn3SG}
            />
            <mesh
              name="Object_5005"
              castShadow
              receiveShadow
              geometry={nodes.Object_5005.geometry}
              material={materials.blinn3SG}
            />
            <mesh
              name="Object_6005"
              castShadow
              receiveShadow
              geometry={nodes.Object_6005.geometry}
              material={materials.blinn3SG}
            />
            <mesh
              name="Object_7002"
              castShadow
              receiveShadow
              geometry={nodes.Object_7002.geometry}
              material={materials.initialShadingGroup}
            />
          </group>
        </group>
        <group name="basquet">
          <group name="Root">
            <group name="Basketball">
              <mesh
                name="Basketball_0"
                castShadow
                receiveShadow
                geometry={nodes.Basketball_0.geometry}
                material={materials["Material.018"]}
              />
              <mesh
                name="Basketball_1"
                castShadow
                receiveShadow
                geometry={nodes.Basketball_1.geometry}
                material={materials["Material.019"]}
              />
            </group>
          </group>
        </group>
        <group name="libros">
          <group name="books01fbx">
            <group name="RootNode008">
              <group name="Cube001">
                <mesh
                  name="Cube_books_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_books_0.geometry}
                  material={materials.books}
                />
                <mesh
                  name="Cube_books_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_books_0001.geometry}
                  material={materials.books}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="pizarra">
          <group
            name="a4847b1ba2d94c319197fa7e7f89b3e4objcleanermaterialmergergle"
            onPointerOver={() => setObjectSelected("contornoPizarra")}
            onPointerOut={() => setObjectSelected("")}
          >
            <mesh
              name="Object_2012"
              castShadow
              receiveShadow
              geometry={nodes.Object_2012.geometry}
              material={materials["Material.020"]}
            />
            <mesh
              name="contornoPizarra"
              castShadow
              receiveShadow
              geometry={nodes.Object_3005.geometry}
              material={materials["Material.021"]}
            >
              <ModelOutline
                objectSelected={objectSelected}
                currentId={"contornoPizarra"}
              />
            </mesh>
          </group>
        </group>
        <group name="libreta">
          <group name="Notebookobjcleanermaterialmergergles">
            <mesh
              name="Object_2010"
              castShadow
              receiveShadow
              geometry={nodes.Object_2010.geometry}
              material={
                materials[
                  "Notebook_-_Bookmark_material_aaec1194-aed2-438d-8e83-467bde"
                ]
              }
            />
            <mesh
              name="Object_3003"
              castShadow
              receiveShadow
              geometry={nodes.Object_3003.geometry}
              material={
                materials[
                  "Notebook_-_Cover_material_eaac6572-c2e2-422b-a048-a5a0924be"
                ]
              }
            />
            <mesh
              name="Object_4012"
              castShadow
              receiveShadow
              geometry={nodes.Object_4012.geometry}
              material={
                materials[
                  "Notebook_-_Pages_material_c56d1ce9-2cb1-464f-a876-67ddc7e05"
                ]
              }
            />
            <mesh
              name="Object_5004"
              castShadow
              receiveShadow
              geometry={nodes.Object_5004.geometry}
              material={
                materials[
                  "Notebook_-_Strap_material_40dd07b3-3b05-42fd-9b42-7692bd2ef"
                ]
              }
            />
          </group>
        </group>

        <group name="lampara">
          <group name="root003">
            <group name="GLTF_SceneRootNode003">
              <group name="Circle_2">
                <mesh
                  name="Object_7001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7001.geometry}
                  material={materials["Material.028"]}
                />
              </group>
              <group name="Cube_3">
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.028"]}
                />
              </group>
              <group name="Cylinder_1">
                <mesh
                  name="Object_4005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4005.geometry}
                  material={materials["Material.028"]}
                />
                <mesh
                  name="Object_5001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5001.geometry}
                  material={materials["Material.029"]}
                />
              </group>
              <group name="Sphere_4">
                <mesh
                  name="foco"
                  castShadow
                  receiveShadow
                  ref={lampRef}
                  geometry={nodes.foco.geometry}
                  material={materials["Material.031"]}
                  position={[-17.2, 7.9, 11.132]}
                  rotation={[0, -0.6, -1.25]}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials["Material.030"]}
                  position={[-16.003, 8.496, 11.84]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="cortinas">
          <group name="92759427104f44428466de85dc4144a1fbx">
            <group name="RootNode009">
              <group name="Plane003">
                <group name="Cube004">
                  <mesh
                    name="Cube_Blanco_brillo_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Blanco_brillo_0.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <group name="Cylinder">
                  <mesh
                    name="Cylinder_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material001_0.geometry}
                    material={materials["Material.006"]}
                  />
                </group>
                <group name="Cylinder001">
                  <mesh
                    name="Cylinder001_Blanco_brillo_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_Blanco_brillo_0.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <group name="Cylinder002">
                  <mesh
                    name="Cylinder002_Blanco_brillo_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_Blanco_brillo_0.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <group name="Cylinder003">
                  <mesh
                    name="Cylinder003_Blanco_brillo_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_Blanco_brillo_0.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <mesh
                  name="Plane_Tejido_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Tejido_0.geometry}
                  material={materials.Tejido}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="ventana2">
          <group name="0c4c5861ad2a4757a4ba60ad556421ccfbx001">
            <group name="RootNode010">
              <group name="Plane004">
                <mesh
                  name="Plane001_Material043_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001_Material043_0001.geometry}
                  material={materials["Material.043"]}
                />
              </group>
              <group name="Plane005">
                <mesh
                  name="Plane002_Material064_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane002_Material064_0001.geometry}
                  material={materials["Material.064"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="cortinas2">
          <group name="92759427104f44428466de85dc4144a1fbx001">
            <group name="RootNode011">
              <group name="Plane007">
                <group name="Cube005">
                  <mesh
                    name="Cube_Blanco_brillo_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Blanco_brillo_0001.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <group name="Cylinder004">
                  <mesh
                    name="Cylinder_Material001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material001_0001.geometry}
                    material={materials["Material.006"]}
                  />
                </group>
                <group name="Cylinder005">
                  <mesh
                    name="Cylinder001_Blanco_brillo_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_Blanco_brillo_0001.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <group name="Cylinder006">
                  <mesh
                    name="Cylinder002_Blanco_brillo_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_Blanco_brillo_0001.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <group name="Cylinder007">
                  <mesh
                    name="Cylinder003_Blanco_brillo_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_Blanco_brillo_0001.geometry}
                    material={materials.Blanco_brillo}
                  />
                </group>
                <mesh
                  name="Plane_Tejido_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Tejido_0001.geometry}
                  material={materials.Tejido}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="papel"
          castShadow
          receiveShadow
          geometry={nodes.papel.geometry}
          material={materials["Material.026"]}
          position={[-22.505, 10.188, 8.793]}
          rotation={[3.03, Math.PI / 2, 0]}
          scale={[0.217, 0.202, 0.298]}
        />
        <mesh
          name="papel001"
          castShadow
          receiveShadow
          geometry={nodes.papel001.geometry}
          material={materials["Material.033"]}
          position={[-22.505, 9.983, 4.66]}
          rotation={[3.041, 1.57, 0]}
          scale={[0.2, 0.195, 0.26]}
        />
        <mesh
          name="papel003"
          castShadow
          receiveShadow
          geometry={nodes.papel003.geometry}
          material={materials["Material.034"]}
          position={[-22.505, 8.484, 3.64]}
          rotation={[3.043, Math.PI / 2, 0]}
          scale={[0.182, 0.169, 0.263]}
        />
        <mesh
          name="papel004"
          castShadow
          receiveShadow
          geometry={nodes.papel004.geometry}
          material={materials["Material.032"]}
          position={[-22.505, 8.224, 8.283]}
          rotation={[3.03, Math.PI / 2, 0]}
          scale={[0.199, 0.191, 0.298]}
        />
        <group
          name="Pin"
          position={[-22.483, 10.665, 8.771]}
          rotation={[0, 1.104, 0]}
          scale={0.028}
        >
          <mesh
            name="Pin_0"
            castShadow
            receiveShadow
            geometry={nodes.Pin_0.geometry}
            material={materials.PinMaterial}
            rotation={[0, 0.401, 0]}
          />
          <mesh
            name="Pin_1"
            castShadow
            receiveShadow
            geometry={nodes.Pin_1.geometry}
            material={materials.PinMetalMaterial}
            rotation={[0, 0.401, 0]}
          />
        </group>
        <group
          name="Pin001"
          position={[-22.483, 10.141, 6.73]}
          rotation={[0, 1.104, 0]}
          scale={0.028}
        >
          <mesh
            name="Pin_0001"
            castShadow
            receiveShadow
            geometry={nodes.Pin_0001.geometry}
            material={materials.PinMaterial}
            rotation={[0, 0.401, 0]}
          />
          <mesh
            name="Pin_1001"
            castShadow
            receiveShadow
            geometry={nodes.Pin_1001.geometry}
            material={materials.PinMetalMaterial}
            rotation={[0, 0.401, 0]}
          />
        </group>
        <group
          name="Pin002"
          position={[-22.483, 8.639, 8.276]}
          rotation={[0, 1.104, 0]}
          scale={0.028}
        >
          <mesh
            name="Pin_0002"
            castShadow
            receiveShadow
            geometry={nodes.Pin_0002.geometry}
            material={materials.PinMaterial}
            rotation={[0, 0.401, 0]}
          />
          <mesh
            name="Pin_1002"
            castShadow
            receiveShadow
            geometry={nodes.Pin_1002.geometry}
            material={materials.PinMetalMaterial}
            rotation={[0, 0.401, 0]}
          />
        </group>
        <group
          name="Pin003"
          position={[-22.483, 10.459, 4.658]}
          rotation={[0, 1.104, 0]}
          scale={0.028}
        >
          <mesh
            name="Pin_0003"
            castShadow
            receiveShadow
            geometry={nodes.Pin_0003.geometry}
            material={materials.PinMaterial}
            rotation={[0, 0.401, 0]}
          />
          <mesh
            name="Pin_1003"
            castShadow
            receiveShadow
            geometry={nodes.Pin_1003.geometry}
            material={materials.PinMetalMaterial}
            rotation={[0, 0.401, 0]}
          />
        </group>
        <group
          name="Pin004"
          position={[-22.483, 8.853, 3.626]}
          rotation={[0, 1.104, 0]}
          scale={0.028}
        >
          <mesh
            name="Pin_0004"
            castShadow
            receiveShadow
            geometry={nodes.Pin_0004.geometry}
            material={materials.PinMaterial}
            rotation={[0, 0.401, 0]}
          />
          <mesh
            name="Pin_1004"
            castShadow
            receiveShadow
            geometry={nodes.Pin_1004.geometry}
            material={materials.PinMetalMaterial}
            rotation={[0, 0.401, 0]}
          />
        </group>
        <mesh
          name="poster1"
          castShadow
          receiveShadow
          geometry={nodes.poster1.geometry}
          material={materials["Material.008"]}
          position={[-19.828, 14.053, 14.943]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[2.079, 2.079, 2.555]}
        />
        <group
          name="poster2"
          position={[-0.976, 11.718, 14.943]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[1.72, 1.673, 2.45]}
        >
          <mesh
            name="Plane003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Plane003_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials["Material.027"]}
          />
        </group>
        <mesh
          name="poster3"
          castShadow
          receiveShadow
          geometry={nodes.poster3.geometry}
          material={materials["Material.010"]}
          position={[-22.53, 10.484, -1.436]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.842, 1.891, 2.324]}
        />
        <mesh
          name="poster4"
          castShadow
          receiveShadow
          geometry={nodes.poster4.geometry}
          material={materials["Material.009"]}
          position={[-19.52, 9.041, 15.002]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[1.557, 1.599, 1.965]}
        />
        <group
          name="cat"
          position={[-5.513, 1.13, -7.61]}
          rotation={[-Math.PI / 2, 0, -1.711]}
          scale={6.274}
        >
          <group name="catFBX" rotation={[Math.PI / 2, 0.458, 0]} scale={0.001}>
            <group name="RootNode012" rotation={[0, 0.458, 0]}>
              <group
                name="cat001"
                position={[58.967, 87.299, -41.138]}
                rotation={[-Math.PI / 2, 0, 0.421]}
              >
                <group
                  name="cat0"
                  position={[0, 0, -87.486]}
                  rotation={[0, 0, 0.458]}
                >
                  <group
                    name="Object_5006"
                    position={[2.683, 2.026, 107.426]}
                    rotation={[0, 0, 0.458]}
                  >
                    <mesh
                      name="cat0_cat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.cat0_cat_0.geometry}
                      material={materials["material.003"]}
                      rotation={[0, 0, 0.458]}
                    />
                  </group>
                </group>
                <group
                  name="cushion"
                  position={[0, 0, -87.486]}
                  rotation={[0, 0, 0.458]}
                >
                  <group
                    name="Object_8003"
                    position={[0, 0, 33.945]}
                    rotation={[0, 0, 0.458]}
                  >
                    <mesh
                      name="cushion_cushion_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.cushion_cushion_0.geometry}
                      material={materials.cushion}
                      rotation={[0, 0, 0.458]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="cama"
          castShadow
          receiveShadow
          geometry={nodes.cama.geometry}
          material={materials["material.004"]}
          position={[-17.667, 3.491, -8.021]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[0.057, 0.057, 0.053]}
        />
        <group
          name="monitor"
          position={[-7.919, 6.153, 13.282]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={6.295}
        >
          <group
            name="e2759b92a838405e8167c182f17d0afcfbx"
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={0.01}
          >
            <group
              name="RootNode001"
              rotation={[Math.PI, 0, Math.PI]}
              onPointerOver={() => setObjectSelected("monitor")}
              onPointerOut={() => setObjectSelected("")}
            >
              <group
                name="PC_Monitor"
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={100}
              >
                <mesh
                  name="PC_Monitor_Monitor_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PC_Monitor_Monitor_1_0.geometry}
                  material={materials.Monitor_1}
                  rotation={[0, 0, -Math.PI]}
                >
                  <ModelOutline
                    objectSelected={objectSelected}
                    currentId={"monitor"}
                  />
                </mesh>
                <mesh
                  name="PC_Monitor_Monitor_screen_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PC_Monitor_Monitor_screen_0.geometry}
                  material={materials.Monitor_screen}
                  rotation={[0, 0, -Math.PI]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="luna"
          position={[-97.755, 36.37, 99.563]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.069}
        >
          <group
            name="4e326c5f7a3b4af4aecde4d916ae94c5fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode013">
              <group name="Sphere" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Sphere_Material002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere_Material002_0.geometry}
                  material={materials["Material.023"]}
                  position={[-0.599, -0.959, 0.631]}
                  rotation={[0, 0.609, 0.526]}
                  scale={0.415}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="papel002"
          castShadow
          receiveShadow
          geometry={nodes.papel002.geometry}
          material={materials["Material.025"]}
          position={[-22.505, 9.679, 6.707]}
          rotation={[3.041, Math.PI / 2, 0]}
          scale={[0.208, 0.202, 0.298]}
        />
        <mesh
          name="papelNota1"
          castShadow
          receiveShadow
          geometry={nodes.papelNota1.geometry}
          material={materials["initialShadingGroup.001"]}
          position={[-22.445, 9.774, 8.147]}
          rotation={[-Math.PI / 2, 1.485, -1.682]}
          scale={[0.093, 0.113, 0.167]}
        />
        <mesh
          name="papelNota2"
          castShadow
          receiveShadow
          geometry={nodes.papelNota2.geometry}
          material={materials["initialShadingGroup.001"]}
          position={[-22.467, 9.277, 6.106]}
          rotation={[-Math.PI / 2, 1.542, -1.682]}
          scale={[0.093, 0.113, 0.167]}
        />
        <mesh
          name="papelNota3"
          castShadow
          receiveShadow
          geometry={nodes.papelNota3.geometry}
          material={materials["initialShadingGroup.001"]}
          position={[-22.445, 7.843, 8.887]}
          rotation={[-Math.PI / 2, 1.503, -1.682]}
          scale={[0.093, 0.113, 0.167]}
        />
        <mesh
          name="papelNota4"
          castShadow
          receiveShadow
          geometry={nodes.papelNota4.geometry}
          material={materials["initialShadingGroup.001"]}
          position={[-22.445, 10.359, 4]}
          rotation={[3.03, Math.PI / 2, 0]}
          scale={[0.093, 0.113, 0.167]}
        />
        <mesh
          name="papelNota5"
          castShadow
          receiveShadow
          geometry={nodes.papelNota5.geometry}
          material={materials["initialShadingGroup.001"]}
          position={[-22.452, 8.099, 4.28]}
          rotation={[-Math.PI / 2, 1.491, -1.682]}
          scale={[0.093, 0.113, 0.167]}
        />
        <group
          name="reloj"
          position={[-20.505, 5.578, 8.485]}
          rotation={[-Math.PI / 2, 0, 0.33]}
          scale={0.231}
        >
          <group name="root008" rotation={[0, 0, 0.33]}>
            <group
              name="GLTF_SceneRootNode008"
              rotation={[Math.PI / 2, 0.33, 0]}
            >
              <group
                name="Cube002_0"
                position={[0, 0.053, 0]}
                rotation={[0, 0.33, 0]}
                scale={[1.549, 1.013, 1.549]}
              >
                <mesh
                  name="Object_4011"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4011.geometry}
                  material={materials.aloy_doff}
                  rotation={[0, 0.33, 0]}
                />
                <mesh
                  name="Object_5007"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5007.geometry}
                  material={materials["material.005"]}
                  rotation={[0, 0.33, 0]}
                />
              </group>
              <group
                name="Cube004_1"
                position={[0, 0, -0.059]}
                rotation={[0, 0.33, 0]}
              >
                <mesh
                  name="Object_7003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7003.geometry}
                  material={materials.Eevee_Glass_Shader}
                  rotation={[0, 0.33, 0]}
                />
              </group>
              <group
                name="Cube026_3"
                position={[0.043, 1.045, 0.779]}
                rotation={[0, -1.241, -Math.PI / 2]}
                scale={[-0.469, -0.061, -0.469]}
              >
                <mesh
                  name="Object_12001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12001.geometry}
                  material={materials.aloy_doff}
                  rotation={[-0.568, 0, 0]}
                />
              </group>
              <group name="Plane_2" rotation={[0, 0.33, 0]} scale={3.463} />
            </group>
          </group>
        </group>
        <group
          name="reigenmob100"
          position={[2.784, 3.636, 12.596]}
          rotation={[-1.573, -0.032, 3.08]}
          scale={0.476}
        >
          <group
            name="f27c8b6ece9b4253888a6b4fcebc9c44fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode014">
              <group
                name="Armature"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <group name="Object_4014">
                  <group
                    name="Object_157001"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <skinnedMesh
                    name="Object_158"
                    geometry={nodes.Object_158.geometry}
                    material={materials.N00_000_00_Body_00_SKIN_Instance}
                    skeleton={nodes.Object_158.skeleton}
                  />
                  <skinnedMesh
                    name="Object_159001"
                    geometry={nodes.Object_159001.geometry}
                    material={materials.N00_000_00_FaceMouth_00_FACE_Instance}
                    skeleton={nodes.Object_159001.skeleton}
                  />
                  <primitive object={nodes._rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="saitama"
          position={[4.827, 3.663, 12.376]}
          rotation={[-Math.PI / 2, 0, 3.136]}
        >
          <group name="root009">
            <group name="GLTF_SceneRootNode009" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="One_punch_man_3"
                position={[0, 0.304, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.025}
              >
                <mesh
                  name="Object_6004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6004.geometry}
                  material={materials["02_-_Default"]}
                />
              </group>
              <group name="Plane_2001" />
            </group>
          </group>
        </group>
        <group
          name="mob_huevo"
          position={[3.807, 3.772, 12.902]}
          rotation={[-Math.PI / 2, 0, 1.017]}
          scale={0.554}
        >
          <group
            name="4a30dea62ce840b4b1b884c23bac5717fbx"
            rotation={[Math.PI / 2, 0.895, 0]}
            scale={0.01}
          >
            <group name="RootNode015" rotation={[0, 0.895, 0]}>
              <group name="pasted__pSphere1" rotation={[0, 0.895, 0]}>
                <mesh
                  name="pasted__pSphere1_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pSphere1_lambert2_0.geometry}
                  material={materials.lambert2}
                  rotation={[0, 0.895, 0]}
                />
                <mesh
                  name="pasted__pSphere1_lambert5_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pSphere1_lambert5_0.geometry}
                  material={materials.lambert5}
                  rotation={[0, 0.895, 0]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="alfombra"
          position={[-6.761, 1.21, -6.408]}
          rotation={[-Math.PI / 2, 0, 1.488]}
          scale={3.384}
        >
          <group
            name="c786f85e303c4184a4f1a6960dab7f81fbx"
            rotation={[Math.PI / 2, -0.057, 0]}
            scale={0.025}
          >
            <group name="RootNode016" rotation={[0, -0.057, 0]}>
              <group
                name="Box001_1"
                position={[4.032, 0, 28.629]}
                rotation={[-Math.PI / 2, 0, -0.057]}
              >
                <mesh
                  name="Box001_02_-_Default_0"
                  castShadow
                  receiveShadow
                  geometry={nodes["Box001_02_-_Default_0"].geometry}
                  material={materials["02_-_Default.001"]}
                  rotation={[0, 0, -0.057]}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="paredes"
          castShadow
          receiveShadow
          geometry={nodes.paredes.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          name="techo_y_suelo"
          castShadow
          receiveShadow
          geometry={nodes.techo_y_suelo.geometry}
          material={materials["Material.011"]}
        />

        <mesh
          name="estanteria"
          castShadow
          receiveShadow
          geometry={nodes.estanteria.geometry}
          material={nodes.estanteria.material}
        />
        <group name="lampara_lava">
          <group name="3af78b939e60426f97f1cd5a40c920a3fbx">
            <group name="RootNode">
              <group name="LAVAMESH">
                <mesh
                  name="LAVAMESH_rampShader1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.LAVAMESH_rampShader1_0.geometry}
                  material={materials.rampShader1}
                />
              </group>
              <group name="pCylinder1">
                <mesh
                  name="pCylinder1_chrome1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder1_chrome1_0.geometry}
                  material={materials.chrome1}
                />
                <mesh
                  name="pCylinder1_GLASS_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder1_GLASS_0.geometry}
                  material={materials.GLASS}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="mesa_de_luz"
          castShadow
          receiveShadow
          geometry={nodes.mesa_de_luz.geometry}
          material={nodes.mesa_de_luz.material}
          position={[0, 0, -0.59]}
        />
        <group name="silla">
          <group name="Office_Chairfbx">
            <group name="RootNode002">
              <group name="Office_Chair">
                <group name="Object_4">
                  <mesh
                    name="Office_Chair_Office_Chair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Office_Chair_Office_Chair_0.geometry}
                    material={materials.Office_Chair}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="escritorio">
          <group name="root">
            <group name="GLTF_SceneRootNode">
              <group name="Cube_0">
                <group name="Object_4001">
                  <mesh
                    name="Object_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0.geometry}
                    material={materials.Material}
                  />
                  <mesh
                    name="Object_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_1.geometry}
                    material={materials.darkmetal}
                  />
                  <mesh
                    name="Object_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_2.geometry}
                    material={materials.dark}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="keyboard">
          <group name="Logitech_Tastatur10fbx">
            <group name="RootNode003">
              <group name="Camera001">
                <group name="Object_4002" />
              </group>
              <group name="Tastatur">
                <mesh
                  name="Tastatur_Tastatur_F����chen_0"
                  castShadow
                  receiveShadow
                  geometry={nodes["Tastatur_Tastatur_F����chen_0"].geometry}
                  material={materials.Tastatur_Fchen}
                />
                <mesh
                  name="Tastatur_Tastatur_Seite_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tastatur_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                />
                <mesh
                  name="Tastatur_Tastatur_Untergrund_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tastatur_Tastatur_Untergrund_0.geometry}
                  material={materials.Tastatur_Untergrund}
                />
                <mesh
                  name="Tastatur_Tastatur_Unterseite_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tastatur_Tastatur_Unterseite_0.geometry}
                  material={materials.Tastatur_Unterseite}
                />
              </group>
              <group name="Tasten">
                <mesh
                  name="Tasten_Tasten_2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tasten_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                />
              </group>
              <group name="Tasten_Kappen">
                <mesh
                  name="Tasten_Kappen_Tasten_Emission_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tasten_Kappen_Tasten_Emission_0.geometry}
                  material={materials.Tasten_Emission}
                />
                <mesh
                  name="Tasten_Kappen_Tasten_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Tasten_Kappen_Tasten_0.geometry}
                  material={materials.Tasten}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="mouse">
          <group name="root002">
            <group name="GLTF_SceneRootNode002">
              <group name="Cylinder_0">
                <mesh
                  name="Object_4004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4004.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  name="Object_6001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6001.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials["Material.004"]}
                />
                <mesh
                  name="Object_8001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8001.geometry}
                  material={materials["Material.005"]}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Object_2001"
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials.Copertina}
        >
          <mesh
            name="Object_3"
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Pagine_Centrali}
          />
          <mesh
            name="Object_4008"
            castShadow
            receiveShadow
            geometry={nodes.Object_4008.geometry}
            material={materials.Pagine_Laterali}
          />
        </mesh>
        <mesh
          name="Object_2003"
          castShadow
          receiveShadow
          geometry={nodes.Object_2003.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2004"
          castShadow
          receiveShadow
          geometry={nodes.Object_2004.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2005"
          castShadow
          receiveShadow
          geometry={nodes.Object_2005.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2006"
          castShadow
          receiveShadow
          geometry={nodes.Object_2006.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2007"
          castShadow
          receiveShadow
          geometry={nodes.Object_2007.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Object_2008"
          castShadow
          receiveShadow
          geometry={nodes.Object_2008.geometry}
          material={materials.Copertina}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.024"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/cuartoPortfolio.glb");
