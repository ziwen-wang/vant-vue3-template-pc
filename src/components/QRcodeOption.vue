<template>
  <canvas id="canvas" ref="canvas" class="canvas" :width="width" :height="height"></canvas>
</template>

<script lang="ts">
import QRCode from "qrcode";
import { onMounted, ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    //二维码存储内容
    qrUrl: {
      type: String,
      default: "Hello World"
    },
    // canvas width
    width: {
      type: Number,
      default: 400
    },
    // canvas height
    height: {
      type: Number,
      default: 400
    },
    // 二维码尺寸（正方形 长宽相同）
    qrSize: {
      type: Number,
      default: 360
    },
    // 二维码底部文字
    qrText: {
      type: String,
      default: "Hello World"
    },
    //底部说明文字字号
    qrTextSize: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      qrCodeOption: {
        errorCorrectionLevel: "H",
        width: this.qrSize,
        version: 7
      }
    };
  },
  methods: {
    handleQrcode() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      QRCode.toDataURL(this.qrUrl, this.qrCodeOption)
        .then((url: string) => {
          // 画二维码里的logo// 在canvas里进行拼接
          let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
          new Promise<HTMLImageElement>((resolve) => {
            const image = new Image();
            image.src = url;
            image.onload = () => {
              resolve(image);
            };
          }).then((img) => {
            // console.log(img, ctx)
            ctx.drawImage(img, (this.width - this.qrSize) / 2, 0, this.qrSize, this.qrSize);
            if (this.qrText) {
              //设置字体
              ctx.font = "bold " + this.qrTextSize + "px Arial";
              let tw = ctx.measureText(this.qrText).width; // 文字真实宽度
              let ftop = this.qrSize - this.qrTextSize; // 根据字体大小计算文字top
              let fleft = (this.width - tw) / 2; // 根据字体大小计算文字left
              ctx.fillStyle = "#fff";
              ctx.textBaseline = "top"; //设置绘制文本时的文本基线。
              ctx.fillStyle = "#333";
              ctx.fillText(this.qrText, fleft, ftop);
            }
          });
        })
        .catch((err: Error) => {
          console.error(err);
        });
    },
    //保存图片
    savePic() {
      let dom = this.$refs.canvas as HTMLCanvasElement
      let a = document.createElement("a")
      //将二维码面板处理为图片
      a.href = dom.toDataURL("image/png", 0.5);
      a.download = this.qrUrl + ".png"
      a.click()
    },
  }
});
</script>
