import Carousel from 'react-material-ui-carousel';
import { Grid } from '@mui/material';
import { StyledCardBanner, StyledCardMedia, StyledTyphographic, StyledBannerGrid, StyledCardContent, StyledViewButton, StyledTittle, StyledCaption } from './carousel.styled';
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
    Name: "Electronics",
    Caption: "Electrify your friends!",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: "https://source.unsplash.com/featured/?macbook"
      },
      {
        Name: "iPhone",
        Image: "https://source.unsplash.com/featured/?iphone"
      }
    ]
  },
  {
    Name: "Home Appliances",
    Caption: "Say no to manual home labour!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: "https://source.unsplash.com/featured/?washingmachine"
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
      }
    ]
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "https://source.unsplash.com/featured/?lamp"
      },
      {
        Name: "Floral Vase",
        Image: "https://source.unsplash.com/featured/?vase"
      }
    ]
  }
]

const Swiper = () => {
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