package core

type NobelPrizeError struct {
	IsNobelPrizeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNobelPrizeError(code string, msg string, ctx *Context) *NobelPrizeError {
	return &NobelPrizeError{
		IsNobelPrizeError: true,
		Sdk:              "NobelPrize",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NobelPrizeError) Error() string {
	return e.Msg
}
