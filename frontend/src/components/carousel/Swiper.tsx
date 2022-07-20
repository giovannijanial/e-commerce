import Carousel from 'react-material-ui-carousel';
import { Grid } from '@mui/material';
import { StyledCardBanner, StyledCardMedia, StyledTyphographic, StyledBannerGrid, StyledCardContent, StyledViewButton, StyledTittle, StyledCaption } from './carousel.styled';
import { IProduct } from '../../interfaces/Product';
;

type Item = {
  Name: string,
  Caption: string,
  contentPosition: "left" | "right" | "middle",
  Items: { Name: string, Image: string }[]
}

interface BannerProps {
  item: Item,
  contentPosition: "left" | "right" | "middle",
  length?: number,

}

const Banner = (props: BannerProps) => {

  const contentPosition = props.contentPosition ? props.contentPosition : "left"
  const totalItems: number = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item sm={4} display={{ xs: "none", sm: "block", md: "block" }} key="content">
      <StyledCardContent>
        <StyledTittle>
          {props.item.Name}
        </StyledTittle>

        <StyledCaption>
          {props.item.Caption}
        </StyledCaption>

        <StyledViewButton variant="outlined">
          Veja!
        </StyledViewButton>
      </StyledCardContent>
    </Grid>
  )

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12} sm={4} key={item.Name}>
        <StyledCardMedia
          image={item.Image}
          title={item.Name}
        >
          <StyledTyphographic>
            {item.Name}
          </StyledTyphographic>
        </StyledCardMedia>

      </Grid>
    )

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <StyledCardBanner raised>
      <StyledBannerGrid container spacing={0}>
        {items}
      </StyledBannerGrid>
    </StyledCardBanner>
  )
}

const items: Item[] = [
  {
    Name: "Eletronicos",
    Caption: "Electrifique seus amigos!",
    contentPosition: "left",
    Items: [
      {
        Name: "Caixa de Som Gamer Husky Gaming Storm",
        Image: "https://images.kabum.com.br/produtos/fotos/102021/caixa-de-som-gamer-husky-storm-rainbow-6w-usb-cx-hst-ra_caixa-de-som-gamer-husky-storm-rainbow-6w-usb-cx-hst-ra_1565178255_gg.jpg"
      },
      {
        Name: "Notebook Lenovo Ultrafino Ideapad Ryzen 5",
        Image: "https://images.kabum.com.br/produtos/fotos/264621/notebook-lenovo-ultrafino-ideapad-ryzen-5-5500u-8gb-256gb-ssd-15-6-full-hd-linux-cinza-82mfs00100_1637242641_gg.jpg"
      }
    ]
  },
  {
    Name: "Hardware",
    Caption: "Os melhores preços em Hardwares!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Placa-Mãe MSI A320M-A Pro Max p/ AMD AM4",
        Image: "https://images.kabum.com.br/produtos/fotos/108502/placa-mae-msi-a320m-a-pro-max-p-amd-am4-m-atx-ddr4-_1576155307_gg.jpg"
      },
      {
        Name: "Processador Intel Core i5",
        Image: "https://images.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_gg.jpg"
      }
    ]
  },
  {
    Name: "Periféricos",
    Caption: "Os mais estilosos você encontra aqui!",
    contentPosition: "right",
    Items: [
      {
        Name: "Mouse Gamer Logitech G403 HERO",
        Image: "https://images.kabum.com.br/produtos/fotos/102649/mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_1563479684_gg.jpg"
      },
      {
        Name: "Headset Gamer Fallen Morcego",
        Image: "https://images.kabum.com.br/produtos/fotos/101513/headset-gamer-fallen-morcego-surround-virtual-7-1-drivers-53mm-he-ga-fn-mo_1633372716_gg.jpg"
      }
    ]
  }
]

interface Props {
  products: IProduct[]
}

const Swiper = ({ products }: Props) => {
  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <Carousel>
        {
          items.map((item, index) => {
            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
          })
        }
      </Carousel>
      <br />
    </div>
  );
}

export default Swiper