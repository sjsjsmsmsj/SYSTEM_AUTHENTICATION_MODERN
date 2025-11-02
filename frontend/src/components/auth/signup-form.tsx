import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"
import { z } from 'zod' // use for validate data
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


// use for validate data 
const signUpSchema = z.object({
  firstname: z.string().min(1, "Tên bắt buộc phải có!"),
  lastname: z.string().min(1, "Họ bắt buộc phải có!"),
  username: z.string().min(3, "Tên đăng nhập phải có ít nhất 3 ký tự!"),
  email: z.email("Email không hợp lệ!"),
  password: z.string().min(6, "Mật khẩu bắt buộc phải có ít nhất 6 ký tự!")
});

type SingUpFormValues = z.infer<typeof signUpSchema>;


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async (data: SingUpFormValues) => {
    console.log(data);
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-border">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* header - logo */}
              <div className="flex flex-col items-center text-center gap-2">
                <a href="/"
                  className="mx-auto block w-fit text-center"
                ><img src="./logo.png" alt="logo" /></a>
                <h1 className="text-2xl font-bold">Tạo tài khoản Moji</h1>
                <p className="text-muted-foreground text-balance">
                  Chào mừng bạn! Hãy đăng ký để bắt đầu
                </p>
              </div>
              {/* họ và tên  */}
              <div className="grid grid-cols-2 gap-x-8 w-full">
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="block text-shadow-amber-400">
                    Họ
                  </Label>
                  <Input
                    type="text"
                    id="lastname"
                    placeholder="Họ"
                    className="block text-sm"
                    {...register("lastname")}
                  />
                </div>
                {
                  errors.lastname && (
                    <p className="text-destructive text-sm">
                      {errors.lastname.message}
                    </p>
                  )
                }
                <div className="space-y-2">
                  <Label htmlFor="firstname" className="block text-shadow-amber-400">
                    Tên
                  </Label>
                  <Input
                    type="text"
                    id="firstname"
                    placeholder="Tên"
                    className="block text-sm"
                    {...register("firstname")}
                  />
                </div>
                {
                  errors.firstname && (
                    <p className="text-destructive text-sm">
                      {errors.firstname.message}
                    </p>
                  )
                }
              </div>

              {/* username  */}
              <div className="flex flex-col gap-3">
                <div className="space-y-2">
                  <Label htmlFor="username" className="block text-shadow-amber-400">
                    Tên đăng nhập
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Lâm Gia Thịnh"
                    className="block text-sm"
                    {...register("username")}
                  />
                </div>
                {
                  errors.username && (
                    <p className="text-destructive text-sm">
                      {errors.username.message}
                    </p>
                  )
                }

              </div>

              {/* email  */}
              <div className="flex flex-col gap-3">
                <div className="space-y-2">
                  <Label htmlFor="email" className="block text-shadow-amber-400">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="thinh@gmail.com"
                    className="block text-sm"
                    {...register("email")}
                  />
                </div>
                {
                  errors.email && (
                    <p className="text-destructive text-sm">
                      {errors.email.message}
                    </p>
                  )
                }

              </div>


              {/* password */}
              <div className="flex flex-col gap-3">
                <div className="space-y-2">
                  <Label htmlFor="password" className="block text-shadow-amber-400">
                    Mật khẩu
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="123456"
                    className="block text-sm"
                    {...register("password")}
                  />
                </div>
                {
                  errors.password && (
                    <p className="text-destructive text-sm">
                      {errors.password.message}
                    </p>
                  )
                }
              </div>


              {/* nút đăng ký */}
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                Tạo tài khoản
              </Button>

              <div className="px-6 text-center">
                <p className="text-muted-foreground">
                  Bạn đã có tài khoản? <a href="/signin">Đăng nhập</a>
                </p>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholderSignUp.png"
              alt="Image"
              className="absolute top-1/2 -translate-y-1/2 object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="px-6 text-center *:[a]:hover:text-primary text-muted-foreground *:[a]:underline">
        Bằng cách tiếp tục, bạn đồng ý với <a href="#">Điều khoản dịch vụ của chúng tôi</a>{" "}
        và <a href="#">Chính sách bảo mật của chúng tôi</a>.
      </div>
    </div>
  )
}
