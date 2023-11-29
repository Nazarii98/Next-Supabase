import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  try {
    // Decode the slug
    const decodedSlug = decodeURIComponent(slug);

    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug: decodedSlug,
      },
      select: {
        Items: true,
      },
    });

    if (!restaurant) {
      throw new Error(`Restaurant not found for slug: ${decodedSlug}`);
    }

    return restaurant.Items || [];
  } catch (error) {
    console.error(`Error fetching restaurant menu for slug ${slug}:`, error);
    throw error;
  }
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchRestaurantMenu(params.slug);
  console.log(menu);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
}
